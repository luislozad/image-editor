// @ts-nocheck
import { Flex } from '@chakra-ui/react';

interface ContainerProps {
	children: JSX.Element[];
}

function Container(props: ContainerProps) {
	const { children } = props;
	return (
		<Flex justifyContent='center' alignItems='center' justifyContent='space-between' gap={2}>
			{children}
		</Flex>
	);
}

export { Container };