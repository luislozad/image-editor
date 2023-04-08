import { Color as ColorBase } from '@interfaces/color';
import { hexToRGBA } from '@utils/color';
import { Button, Text } from '@chakra-ui/react';
import { ColorBox } from '@ui';
import { Title } from '../Title';
import { Container } from '../Container';

interface ColorProps extends ColorBase {
	onSelect: (current: ColorBase) => void;
}

function Color(props: ColorProps) {
	const { value, opacity, onSelect } = props;

	return (
		<Container>
			<Title>Color</Title>
			<Button
				pos='relative'
				variant='outline' 
				h='30px' 
				w='62%'
				py='2px'
				px='8px'
				justifyContent='flex-start'
				alignItems='center'
				gap={2}
				onClick={() => onSelect({ value, opacity })}			
			>
				<ColorBox rgba={hexToRGBA(value, opacity)} />
				<Text 
					h='100%'
					lineHeight={2}
					as='span'
				>
					{value.toUpperCase()}
				</Text>						
			</Button>
		</Container>		
	);
}

export { Color };