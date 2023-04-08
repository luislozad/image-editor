// @ts-nocheck
import { InputGroup, Input, InputRightElement } from '@chakra-ui/react';

interface InputTagProps {
	value: string;
	onChange: (value: string) => void;
	tag: JSX.Element;
}

function InputTag(props: InputTagProps) {
	const { value, onChange, tag } = props;

	return (
		<InputGroup>
			<Input 
				h='29px'
				variant='inputTextLeft'
				value={value} 
				onChange={({ target }) => onChange && onChange(target.value)} 
			/>
			<InputRightElement justifyContent='flex-end' w='max-content' pb='10px' pr='4px' children={tag} />
		</InputGroup>
	);
}

export { InputTag };