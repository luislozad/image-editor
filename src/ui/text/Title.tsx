// @ts-nocheck
import { Text } from '@chakra-ui/react';

interface TitleProps {
	children: string | JSX.Element;
}

function Title(props: TitleProps) {
	const { children } = props;
	return (
		<Text color='title' fontSize='13px'>{children}</Text>
	)
}

export { Title };