// @ts-nocheck
import { Flex, Text, Box } from '@chakra-ui/react';

interface BlockProps {
	icon: JSX.Element;
	name: string;
}

function Block(props: BlockProps) {
	const { icon, name } = props;

	return (
		<Flex pos='relative' w='100%' h='100%' alignItems='end' justifyContent='center'>
			<Flex pos='absolute' w='100%' h='100%' inset='0px' alignItems='center' justifyContent='center'>
				<Box w='max-content' h='max-content'>
					{icon}					
				</Box>
			</Flex>
			<Text pb='4px' pos='relative' fontWeight='400' fontSize='13px'>{name}</Text>
		</Flex>		
	);
}

export { Block };