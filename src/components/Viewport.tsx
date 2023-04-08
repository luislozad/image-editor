// @ts-nocheck
import { Flex } from '@chakra-ui/react';
import { Topbar } from '@ui';
import { Editor } from './Editor';
import { PanelLeft } from './PanelLeft';

function Viewport() {
	return (
		<Flex bg='viewport' w='100%' h='100%' direction='column' pos='relative'>
			<PanelLeft />
			<Topbar />
			<Editor />
		</Flex>
	);
}

export { Viewport };