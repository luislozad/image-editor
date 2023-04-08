// @ts-nocheck
import { Flex } from '@chakra-ui/react';
import { SubTitle, DivHorz } from '@ui';

interface SubTitle2Props {
	text: string;
	variant?: string;
	divisor?: boolean;
	uppercase?: boolean;
}

function SubTitle2(props: SubTitle2Props) {
	const { text, variant, uppercase, divisor = true } = props;

	return (
		<Flex w='100%'>
			<SubTitle uppercase={uppercase} text={text} />
			<Flex direction='column' flexGrow={1} justifyContent='flex-end' pb='6px' pl='2px'>
				{ divisor && <DivHorz variant={variant || 'xl'} /> }
			</Flex>
		</Flex>		
	);
}

export { SubTitle2 };