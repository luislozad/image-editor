// @ts-nocheck
import { Flex, Text, Box } from '@chakra-ui/react';
import { DivHorz } from './DivHorz';

interface TitleProps {
	text: string;
}

function Title(props: TitleProps) {
	const { text } = props;

	return (
		<Box>
			<Flex justifyContent='center' alignItems='center' w='100%' minH='56px' bg='transparent'>
				<Text as='h1' color='title' textTransform='uppercase'>
					{text}
				</Text>
			</Flex>
			<DivHorz />
		</Box>
	);
}

export { Title };