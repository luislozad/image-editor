import { Box, Flex, Button } from '@chakra-ui/react';
import { DivHorz } from '@ui';
import { Shadow } from '@interfaces/effect';
import { Color as ColorBase } from '@interfaces/color';
import { Color } from './Color';
import { Position } from './Position';
import { Blur } from './Blur';

interface ShadowOptionsProps {
	value: Shadow;
	onColorSelect: (current: ColorBase) => void;
	onPosChange: (current: { x: number, y: number }) => void;
	onBlurChange: (current: number) => void;
}

function ShadowOptions(props: ShadowOptionsProps) {
	const { 
		value, 
		onColorSelect, 
		onPosChange, 
		onBlurChange 
	} = props;
	const { color, pos, blur } = value;

	return (
		<Box w='230px'>
			<DivHorz />
			<Flex gap={3} direction='column' py='15px' pl='10px'>
				<Color 
					value={color.value} 
					opacity={color.opacity}
					onSelect={onColorSelect}
				/>
				<Position 
					pos={pos} 
					onChange={onPosChange} 
				/>
				<Blur 
					value={blur} 
					onChange={onBlurChange} 
				/>
			</Flex>
		</Box>
	);
}

export { ShadowOptions };