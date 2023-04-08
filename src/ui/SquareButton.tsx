// @ts-nocheck
import { Button, Flex } from '@chakra-ui/react';

interface SquareButtonProps {
	children: JSX.Element | JSX.Element[];
	onClick: (e: MouseEvent) => void;
	type?: 'square1' | 'square2';
}

function SquareButton(props: SquareButtonProps) {
	const { children, onClick, type } = props;

	return (
		<Button w='5.4375rem' h='5.4375rem' variant={type === 'square2' ? 'square2' : 'square'} onClick={onClick} fontWeight='400' fontSize='0.8125rem'>
			<Flex direction='column' justifyContent='center' alignItems='center' w='100%' h='100%'>
				{children}
			</Flex>			
		</Button>
	);
}

export { SquareButton };