// @ts-nocheck
import { memo, useCallback, useState, useEffect } from 'react';
import { Box } from '@chakra-ui/react';
import { Sketch } from '@uiw/react-color';
import { rgbaArrayToString, hexToRGBA, rgba2hex } from '@utils/color';

interface ColorPickerProps {
	onChange: (color: IColor) => void;
	color: IColor;
}

const ColorPicker = memo((props: ColorPickerProps) => {
	const { onChange, color } = props;

	const handlerChangeColor = useCallback((color: any) => {
		const { hex, rgba } = color;
		const newColor = {
			opacity: rgba.a,
			value: hex,
		};

		onChange(newColor)
	}, []);

	const newColor = rgba2hex(rgbaArrayToString(hexToRGBA(color.value, color.opacity)));

	return (
		<Box pos='relative'>
			<Sketch 
				color={newColor} 
				onChange={handlerChangeColor}
			/>
		</Box>
	);
})

export { ColorPicker };