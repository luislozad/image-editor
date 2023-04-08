// @ts-nocheck
import { Box } from '@chakra-ui/react';

interface SpacerProps {
	size?: number;
}

function Spacer(props: SpacerProps) {
	const { size } = props;

	return (
		<Box mb={size ? `${size}rem` : '1rem'} w='full' bg='transparent'></Box>
	);
}

export { Spacer };