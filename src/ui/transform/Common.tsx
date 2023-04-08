// @ts-nocheck
import { useState, useEffect } from 'react';
import { GridContent, ButtonRectImage } from '@ui';
import {
	CustomIcon,
	SquareIcon,
	QuarterThreeIcon,
	SixteenNineIcon,
	ThreeFourIcon,
	NineSixteenIcon,
} from './icons';
import { Block } from './Block';
import { ActiveItem } from './types';
import { useTransformPanel } from '@store/properties';

function Common() {
	const [ active, setActive ] = useState('custom');

	useEffect(() => {
		const unsubTransformPanel = useTransformPanel
			.subscribe((state) => state.type, setActive);

		return () => {
			unsubTransformPanel();
		}
	}, []);

	return (
		<GridContent title='Common'>
			<ButtonRectImage
				backgroundColor='gray.200'
				focus={active === 'custom'}
				w='87px'
				h='87px'
				onClick={() => {
					const { setType } = useTransformPanel.getState();
					setType('custom');
				}}
			>
				<Block 
					icon={<CustomIcon />}
					name='Custom'
				/>
			</ButtonRectImage>

			<ButtonRectImage
				backgroundColor='gray.200'
				focus={active === 'square'}
				w='87px'
				h='87px'
				onClick={() => {
					const { setType } = useTransformPanel.getState();
					setType('square');
				}}
			>
				<Block 
					icon={<SquareIcon />}
					name='Square'
				/>
			</ButtonRectImage>

			<ButtonRectImage
				backgroundColor='gray.200'
				focus={active === '4:3'}
				w='87px'
				h='87px'
				onClick={() => {
					const { setType } = useTransformPanel.getState();
					setType('4:3');
				}}
			>
				<Block 
					icon={<QuarterThreeIcon />}
					name='4:3'
				/>
			</ButtonRectImage>	

			<ButtonRectImage
				backgroundColor='gray.200'
				focus={active === '16:9'}
				w='87px'
				h='87px'
				onClick={() => {
					const { setType } = useTransformPanel.getState();
					setType('16:9');
				}}
			>
				<Block 
					icon={<SixteenNineIcon />}
					name='16:9'
				/>
			</ButtonRectImage>	

			<ButtonRectImage
				backgroundColor='gray.200'
				focus={active === '3:4'}
				w='87px'
				h='87px'
				onClick={() => {
					const { setType } = useTransformPanel.getState();
					setType('3:4');
				}}
			>
				<Block 
					icon={<ThreeFourIcon />}
					name='3:4'
				/>
			</ButtonRectImage>	

			<ButtonRectImage
				backgroundColor='gray.200'
				focus={active === '9:16'}
				w='87px'
				h='87px'
				onClick={() => {
					const { setType } = useTransformPanel.getState();
					setType('9:16');
				}}
			>
				<Block 
					icon={<NineSixteenIcon />}
					name='9:16'
				/>
			</ButtonRectImage>	
		</GridContent>
	);
}

export { Common };