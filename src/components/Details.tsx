// @ts-nocheck

import { Box, Flex } from '@chakra-ui/react';
import { DivHorz } from '@ui';

interface DetailsProps {
	children: JSX.Element | JSX.Element[];
	divisor?: boolean;
	py?: string;
	pt?: string;
	pb?: string;
}

function Details(props: DetailsProps) {
	const { children, py, pt, pb, divisor = true } = props;

	return (
		<Box bg='content' px='0.80rem'>
			<Flex direction='column' py={py || '1rem'} pt={pt} pb={pb} px='0.8rem' gap='2'>
				{children}		
			</Flex>
			{ divisor && <DivHorz variant='xl' /> }
		</Box>
	);
}

export { Details };