// @ts-nocheck
import { Container, Box } from '@chakra-ui/react';

interface WindowProps {
	children: JSX.Element;
}

function Window(props: WindowProps) {
	const { children } = props;
	
	return (
		<Container bg='window' rounded='3xl' maxW='1280px' w='100%' h='700px'>
			<Box padding='2' w='100%' h='100%' py='5'>{children}</Box>
		</Container>
	);
}

export { Window };