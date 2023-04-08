// @ts-nocheck
import { Flex } from '@chakra-ui/react';

interface MessageProps {
	children: string | JSX.Element;
}

function Message(props: MessageProps) {
	const { children } = props;
	return (
		<Flex justifyContent='center' alignItems='center' fontSize='13px' w='100%' h='100%' minH='230px'>
			{children}
		</Flex>
	);
}

export { Message };