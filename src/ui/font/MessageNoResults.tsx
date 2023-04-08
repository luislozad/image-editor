import { Message } from '@ui';
import { Flex, Text } from '@chakra-ui/react';

interface MessageNoResultsProps {
	keyword: string;
}

function MessageNoResults(props: MessageNoResultsProps) {
	const { keyword } = props;

	return (
		<Message>
			<Flex textAlign='center' color='gray.600' fontSize='13px' maxW='200px'>
				<Text as='span'>
					No results were found for <Text as='span' fontWeight='bold'>{keyword}</Text>
				</Text>
				
			</Flex>
		</Message>
	);
}

export { MessageNoResults };