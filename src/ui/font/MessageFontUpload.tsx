import { Flex, Text, Button, Icon, Box } from '@chakra-ui/react';
import { Message } from '@ui';
import { HiPlus } from 'react-icons/hi2'

interface MessageFontUploadProps {
	onLoadFont?: () => void;
}

function MessageFontUpload(props: MessageFontUploadProps) {
	return (
		<Message>
			<Flex justifyContent='space-between' direction='column' maxW='200px' h='230px' gap={5}>
				<Flex h='100%' w='100%' justifyContent='center' alignItems='center'>
					<Text as='span' textAlign='center' color='gray.600'>Upload fonts from your computer to add them to your project.</Text>					
				</Flex>
				<Button 
					fontWeight='400' 
					fontSize='14px' 
					gap={1} 
					bg='blue.600' 
					color='whiteAlpha.900'
					w='100%'
					py='2px'
				>
					<Icon as={HiPlus} />
					<Text>Upload</Text>
				</Button>
			</Flex>
		</Message>
	);
}

export { MessageFontUpload };