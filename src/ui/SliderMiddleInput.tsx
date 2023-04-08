// @ts-nocheck
import { memo } from 'react';
import { Flex, Box, Text } from '@chakra-ui/react'
import { SliderMiddle } from './SliderMiddle';
import { SliderProps } from './Slider';

interface SliderMiddleInputProps extends SliderProps {
	label: string;
}

const SliderMiddleInput = memo((props: SliderMiddleInputProps) => {
	const {  label, onChange, defaultValue } = props;
	return (
		<Box>
			<Text as='span' fontSize='13px' color='title'>{label}</Text>
			<Flex>
				<SliderMiddle 
					onChange={onChange} 
					defaultValue={defaultValue} 
				/>
			</Flex>
		</Box>
	);
});

export { SliderMiddleInput };