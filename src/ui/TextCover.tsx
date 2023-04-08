// @ts-nocheck
import { Flex, Text } from '@chakra-ui/react';

interface TextCoverProps {
	color?: string;
	fontSize?: string;
	text: string;
}

function TextCover(props: TextCoverProps) {
	const { color, fontSize, text } = props;

	return (
		<Flex pos='absolute' w='100%' h='100%' direction='column' alignItems='center' justifyContent='flex-end' overflow='hidden'>
			<Flex justifyContent='center' alignItems='center' background='linear-gradient(transparent, rgba(0, 0, 0, 0.6))' h='40px' w='100%'>
				<Text color={color || 'whiteAlpha.800'} fontWeight='400' fontSize={fontSize || '13px'}>{text}</Text>				
			</Flex>
		</Flex>
	);
}

export { TextCover };