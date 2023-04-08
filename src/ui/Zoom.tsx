// @ts-nocheck
import { Flex, Text } from '@chakra-ui/react';
import { ButtonOutline } from './ButtonOutline';

function Zoom() {
	return (
		<Flex justifyContent='center' alignItems='center'>
			<ButtonOutline>
				<Text p='0px'>-</Text>
			</ButtonOutline>
			<Text as='span' color='text' fontSize='14px' p='0px'>42.6 %</Text>
			<ButtonOutline>
				<Text p='0px'>+</Text>
			</ButtonOutline>
		</Flex>
	);
}

export { Zoom };