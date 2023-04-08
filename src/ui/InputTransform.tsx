// @ts-nocheck
import { Flex, Text } from '@chakra-ui/react';
import { InputTag } from '@ui';

interface Transform {
	width: number;
	height: number;
}

interface InputTransformProps {
	value: Transform;
	onChange: (value: Transform) => void;
}

function InputTransform(props: InputTransformProps) {
	const { value, onChange } = props;

	return (
		<Flex
			justifyContent='space-between'
			alignItems='flex-end'
			gap={3}
		>
			<InputTag 
				tag={<Text textAlign='right' m='0px' p='0px' fontSize='13px' color='rgba(0, 0, 0, 0.6)'>W</Text>}
				value={value.width}
				onChange={(width) => {
					onChange({
						...value,
						width,
					});
				}} 
			/>
			<Text fontSize='13px' color='rgba(0, 0, 0, 0.9)'>x</Text>
			<InputTag
				tag={<Text textAlign='right' m='0px' p='0px' fontSize='13px' color='rgba(0, 0, 0, 0.6)'>H</Text>} 
				value={value.height}
				onChange={(height) => {
					onChange({
						...value,
						height,
					});
				}} 
			/>
		</Flex>
	)
}

export { InputTransform };