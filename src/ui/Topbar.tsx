// @ts-nocheck
import { useCallback, memo, useEffect, useState } from 'react';
import { Flex, Box } from '@chakra-ui/react';
import { ButtonOutline, Zoom } from '@ui';
import { RangeInputTransform } from '@components';
import { useCanvas } from '@store/canvas';

const Topbar = memo(() => {
	const [ showControl, setShowControl ] = useState(false);

	useEffect(() => {
		const unsubCanvas = useCanvas
				.subscribe((state) => state.transformControl, setShowControl);

		return () => {
			unsubCanvas();
		}
	}, []);

	return (
		<Flex 
			flexShrink='0'
			h='3.5rem' 
			w='100%' 
			bg='viewport' 
			inset='0px'
			p='0px 24px'
			alignItems='center'
			justifyContent='space-between'
		>
			<Box>
				<ButtonOutline>Undo</ButtonOutline>
				<ButtonOutline isDisabled>Redo</ButtonOutline>
			</Box>
			<Box>
				{ showControl && <RangeInputTransform /> }
			</Box>
			<Box>
				<Zoom />
			</Box>		
		</Flex>
	);
});

export { Topbar };