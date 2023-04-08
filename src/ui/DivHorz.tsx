// @ts-nocheck
import { Divider } from '@chakra-ui/react';

interface DivHorzProps {
	variant?: string;
}

function DivHorz(props: DivHorzProps) {
	const { variant } = props;

	return (
		<Divider variant={variant || 'base'} opacity='1' orientation='horizontal' />
	);
}

export { DivHorz };