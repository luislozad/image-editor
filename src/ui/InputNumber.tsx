// @ts-nocheck
import { Flex, Input } from '@chakra-ui/react';
import { ButtonMinMax } from '@ui';

interface InputNumberProps {
	value: number;
	valueChange?: number;
	onChange: (value: number) => void;
	h?: string;
}

function InputNumber(props: InputNumberProps) {
	const { value, onChange, h = '30px', valueChange = 1 } = props

	return (
		<Flex gap={3}>
			<Input 
				maxW='60px' 
				variant='inputTextLeft' 
				h={h} 
				pl='3px'
				value={value}
				onChange={({ target }) => onChange(Number(target.value))}
			/>
			<ButtonMinMax 
				valueChange={valueChange}
				onChange={(num) => onChange(value + num)} 
			/>
		</Flex>
	);
}

export { InputNumber };