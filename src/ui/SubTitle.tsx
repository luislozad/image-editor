// @ts-nocheck
import { Text } from '@chakra-ui/react';

interface SubTitleProps {
	text: string;
	uppercase?: boolean;
}

function SubTitle(props: SubTitleProps) {
	const { text, uppercase = true } = props;

	return (
		<Text as='h2' color='title' textTransform={uppercase ? 'uppercase' : undefined} fontSize='0.875rem'>
			{text}
		</Text>		
	);
}

export { SubTitle };