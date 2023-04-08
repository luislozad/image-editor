// @ts-nocheck
import { useEffect, useRef } from 'react';
import { Flex, Portal } from '@chakra-ui/react';
import { usePanel } from '@store/panels';

function PanelLeft() {
	const refPanel = useRef<HTMLELement>();
	const { setViewportLeft, removeViewportLeft } = usePanel.getState();

	useEffect(() => {
		if (refPanel.current) {
			setViewportLeft(refPanel);
		}

		return () => {
			removeViewportLeft();
		}
	}, [refPanel]);

	return (
		<Flex
			ref={refPanel}
			direction='column'
			inset='0px'
			h='100%' 
			minW='0px'
			w='max-content'
			bg='transparent' 
			pos='absolute'
			pt='56px'
			zIndex={999}
		>			
		</Flex>
	);
}

export { PanelLeft };