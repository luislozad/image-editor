import { useState, useEffect, useCallback, memo, ChangeEventHandler } from 'react';
import { Flex, Input, Box } from '@chakra-ui/react';
import { SliderProps } from './Slider';
import { SliderMiddleInput } from '@ui';

interface RangeInputType1Props extends SliderProps {
	label: string;
}

const RangeInputType1 = memo((props: RangeInputType1Props) => {
	const { label, onChange, defaultValue, startPoint } = props;
	const [ value, setValue ] = useState(defaultValue || 0);

	const handleInputChange: ChangeEventHandler<HTMLInputElement> = (e) => {
		const target = e.target!;
		if (target.value !== '') {
			setValue(Number(target.value));
		}
	};

	useEffect(() => {
		onChange(value);
	}, [value]);

	const handleChange = useCallback((value: number) => {
		setValue(value);
	}, []);

	return (
		<Flex w='100%' gap={3}>
			<Box flexGrow={1}>
				<SliderMiddleInput 
					label={label}
					onChange={handleChange}
					defaultValue={defaultValue}
					startPoint={startPoint}
				/>								
			</Box>
			<Flex pl='5px' alignItems='end'>
				<Input 
					maxW='37px' 
					maxH='30px' 
					variant='inputTextCenter' 
					onChange={handleInputChange} 
					value={Math.round(value * 100)} 
				/>								
			</Flex>
		</Flex>		
	);
})

export { RangeInputType1 };