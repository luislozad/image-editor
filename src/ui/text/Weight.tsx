// @ts-nocheck
import { useState, useEffect, useCallback } from 'react';
import { useAsyncEffect } from 'rooks';
import { Select, Spinner, Icon } from '@chakra-ui/react';
import { Container } from './Container';
import { Title } from './Title';
import { ReactComponent as ArrowDownIcon } from '@assets/arrowdown.svg';
import { useTextPanel } from '@store/properties';
import { useTextPanelCache, FontCacheVariant } from '@store/cache';
import { fontLoad } from '@utils/font';
import { shallow } from 'zustand/shallow';

interface Option {
	value: string;
	name: string;
	selected: boolean;
}

function Weight(props: WeightProps) {
	const [loading, setLoading] = useState(false);

	const [options, setOptions] = useState<Option[]>([]);
	const [ fontWeightList, setFontWeightList ] = useState(useTextPanel.getState().weight);

	useAsyncEffect(async () => {
		// debugger;
		//Fuente seleccionda
		const { font } = useTextPanel.getState();
		// Variantes sin cargar
		// filtra total las variantes que no esten en la cache
		// Si no esta cacheada no a sido cargada
		const { fontVariants, setFontVariants } = useTextPanelCache.getState();

		const variants = fontWeightList.filter(({ name }) => {
			const { list } = fontVariants[font.id];
			return !list.some(({ id, error }) => id === name && !error);
		});

		if (variants.length > 0) {
			setLoading(true);
		}

		const loadVariants: { id: string }[] = [];

		try {
			for (const { query, name } of variants) {
				await fontLoad({
					fontFamily: font.family,
					query,
				});

				loadVariants.push({ id: name });
			}
		} catch(_e) {

		} finally {
			if (loadVariants.length > 0) {
				const { list } = fontVariants[font.id];
				setFontVariants({
					[font.id]: {
						list: [
							...list,
							...loadVariants
						]
					}
				});
			} else {
				renderOptions(useTextPanelCache.getState().fontVariants);
			}

			setLoading(false);
		}
	}, [fontWeightList]);

	const renderOptions = (fontVariants: FontCacheVariant) => {
		const { font, weight } = useTextPanel.getState();

		if (!fontVariants.hasOwnProperty(font.id)) return;

		const { list } = fontVariants[font.id];

		if (list.length <= 0) return;

		const [ selectFont ] = weight.filter(({ selected }) => selected);

		const newOptions = list.map(({ id: name }) => {
			return {
				value: name,
				name: name,
				selected: selectFont.name === name,
			}
		});

		setOptions(newOptions);
	}

	useEffect(() => {
		const unsubTextPanel = useTextPanel
				.subscribe((state) => state.weight, setFontWeightList);
		const unsubTextPanelCache = useTextPanelCache
				.subscribe((state) => state.fontVariants, renderOptions);

		return () => {
			unsubTextPanel();
			unsubTextPanelCache();
		}
	}, []);

	const handlerOnChange = useCallback((e: MouseEvent) => {
		const { target } = e;
		const { setWeight, weight } = useTextPanel.getState();

		const newWeight = weight.map((variant) => {
			const { value } = target;
			
			variant.selected = false;

			if (variant.name === value) {
				variant.selected = true;
			}

			return variant;
		});

		setWeight(newWeight);
	}, []);

	const weightSelection = fontWeightList.find(({ selected }) => selected);

	return (
		<Container>
			<Title>Weight</Title>
			<Select
				isDisabled={loading}
				value={weightSelection ? weightSelection.name : undefined}
				width='62%'
				variant='neutral'
				onChange={handlerOnChange}
				icon={loading ? <Spinner /> : <Icon 
						as={ArrowDownIcon} 
						boxSize={'10px !important'}
					/>
				}
			>
				{
					options.map(({ value, name }) => (
						<option 
							key={value} 
							value={value}
						>
							{name}
						</option>					
					))
				}
			</Select>
		</Container>
	);
}

export { Weight };