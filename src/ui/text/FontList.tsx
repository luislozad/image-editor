// @ts-nocheck
import { useState, useEffect, useRef, useCallback } from 'react';
import { useArrayState } from 'rooks';
import { Flex } from '@chakra-ui/react';
import { Explorer, FontRender } from '@components';
import { getFontData, getFontFrom } from '@logic/font';
import { GetFontsResult } from '@logic/types';
import { FontList } from '@interfaces/font';
import { MessageNoResults } from '@ui/font';
import WebFont from 'webfontloader';
import { Font, SearchResult } from '@components/types';
import { useTextPanel } from '@store/properties';
import { FONT_DATA } from '@const/fonts';

export type ID = string;

export interface FontListProps {
    searchResult?: SearchResult;
}

function FontList(props: FontListProps) {
	const { searchResult } = props;

	const { setFont, setWeight } = useTextPanel.getState();

	const max = 20;

	const [loadMore, setLoadMore] = useState(true);
	const [fontMatchList, setFontMatchList] = useState<FontList[]>([]);
	const [fontData, controlFontData] = useArrayState<GetFontsResult[]>([getFontData({ from: 0, to: max })]);

	const [range, setRange] = useState({ from: 0, to: max });

	useEffect(() => {
		const { from, to } = range;
		if (from > 0) {
			const fontData = getFontData({ from, to });
			const { fonts } = fontData;
			if (fonts.length > 0) {
				controlFontData.push(fontData);
				setLoadMore(true);
			}
		}
	}, [range]);

	useEffect(() => {
		if (searchResult) {
			setFontMatchList(getFontFrom(searchResult.result));
		}
	}, [searchResult]);

	const handlerFontSelection = useCallback((font: Font) => {
		const { id, loadedVariant } = font;
		const { family, variants, category } = FONT_DATA[id];
		setFont({
			id,
			family,
			category
		});

		const newVariants = variants.map((variant) => {
			return {
				...variant,
				selected: variant.name === loadedVariant.name,
			}
		});

		setWeight(newVariants);
	}, []);

	return (
		<Flex 
			maxH='230px' 
			w='100%' 
			h='100%' 
			overflow='hidden'
		>
			<Explorer 
				bg='transparent' 
				px='0px'
				w='100%'
				onScrollBottom={() => {
					if (loadMore && fontMatchList.length === 0) {
						setLoadMore(false);
						setRange(({ from, to }) => ({ from: to, to: to * 2 }));
					} 
				}}
			>
				<Flex justifyContent='center' direction='column' w='100%'>
					<Flex justifyContent='center' direction='column' w='100%' display={`${(searchResult && searchResult.match !== '') || (fontMatchList.length > 0) ? 'none' : 'flex'}`}>
						{
							fontData.map(({ fonts }) => (
								fonts.map((obj) => {
									const [ data ] = Object.values(obj);
									const { id } = data;
									return (
										<FontRender font={data} key={id} onSelect={handlerFontSelection} />						
									)
								})
							))
						}
					</Flex>
					{
						fontMatchList.map((obj) => {
							const [ data ] = Object.values(obj);
							const { id } = data;
							return (
								<FontRender font={data} key={id} onSelect={handlerFontSelection} />						
							)
						})
					}
					{
						searchResult && searchResult.match !== '' && fontMatchList.length === 0 && (
							<MessageNoResults keyword={searchResult.match} />
						)
					}
				</Flex>
			</Explorer>
		</Flex>
	);
}

export { FontList };