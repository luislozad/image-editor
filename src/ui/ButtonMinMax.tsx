// @ts-nocheck
import { ButtonGroup, IconButton, Divider, Center } from '@chakra-ui/react';
import { AddIcon, MinusIcon } from '@chakra-ui/icons';
// import { DivVert } from '@ui';

interface ButtonMinMaxProps {
	onChange: (value: number) => void;
	valueChange?: number;
}

function ButtonMinMax(props: ButtonMinMaxProps) {
	const { onChange, valueChange = 1 } = props;

	return (
		<ButtonGroup spacing='0' h='max-content'>
			<IconButton 
				borderTopRightRadius='0px' 
				borderBottomRightRadius='0px' 
				onClick={() => onChange(-valueChange)}
				bg='white.200'
				border='0px solid'
				borderColor='gray.200'
				borderRightWidth='0px'
				color='gray.500'
				icon={<MinusIcon />} 
				size='sm'
				_hover={{
					color: 'gray.600',
					backgroundColor: 'white.300'
				}}
			/>
			<Center>
				<Divider orientation='vertical' />
			</Center>
			<IconButton 
				borderTopLeftRadius='0px' 
				borderBottomLeftRadius='0px' 
				onClick={() => onChange(+valueChange)}
				bg='white.200'
				border='0px solid'
				borderColor='gray.200'
				borderLeftWidth='0px'
				color='gray.500'
				icon={<AddIcon />} 
				size='sm'
				_hover={{
					color: 'gray.600',
					backgroundColor: 'white.300'
				}}
			/>
		</ButtonGroup>
	);
}

export { ButtonMinMax };