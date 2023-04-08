// @ts-nocheck
import { useEffect, useState, useCallback } from 'react';
import { FontData } from '@interfaces/font';
import { fontLoad, getFontVariant } from '@utils/font';
import { Box, Skeleton, Button } from '@chakra-ui/react';
import { useTextPanelCache } from '@store/cache';
import { Font } from './types'
import makeCancellablePromise from 'make-cancellable-promise';

interface FontRenderProps {
	font: FontData;
	onSelect?: (font: Font) => void;
}

function FontRender(props: FontRenderProps) {
	const { setFontVariants, setFonts, fonts } = useTextPanelCache.getState();
	const { font, onSelect } = props;
	const { id, variants, family } = font;

	const variant = getFontVariant(variants);

	const [isLoaded, setIsLoaded] = useState(false);
	const [error, setError] = useState(false);
	const [isCached, setIsCached] = useState(false);

	const { weight, style, css, query, name } = variant;

	const saveFontCache = useCallback(() => {
		if (isCached) return;

		setIsCached(true);

		setFonts({
			[id]: {
				id,
				error,
			},
		});

		setFontVariants({
			[id]: {
				list: [
					{
						id: variant.name,
						error,
					}
				]
			}
		});
	}, [isCached, error]);

	useEffect(() => {
		if (fonts && fonts.hasOwnProperty(id) && !isLoaded) {
			setIsLoaded(true);
			return;
		}

		const { promise, cancel } = makeCancellablePromise(fontLoad({ 
			fontFamily: family, 
			query,
		}));
		
		promise
		.then(() => {
			setIsLoaded(true);
		})
		.catch(() => {
			setError(true);
		});

		return () => {
			if (isLoaded || error) {
				console.log('se guardo!');
				saveFontCache();
			} else {
				console.log('cancelado!');
				cancel();
			}
		}
	}, []);

	return (
		<Box>
			{
				!error && (
					<Skeleton isLoaded={isLoaded} mb='4px'>
						<Button
							h='30px'
							w='100%'
							justifyContent='flex-start'
							variant='lite'
							style={{
								fontFamily: family,
								...css
							}}
							onClick={() => {
								saveFontCache();
								onSelect && onSelect({ 
									loadedVariant: variant,
									id, 
								});							
							}}
						>
							{family}
						</Button>
					</Skeleton>	
				)
			}
		</Box>
	);
}

export { FontRender };