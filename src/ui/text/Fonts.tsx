// @ts-nocheck
import { useState, useCallback, useEffect } from 'react';
import { 
	Flex,
	Button,
	Text,
} from '@chakra-ui/react';
import { Modal } from '@ui';
import { TabCenter, MessageFontUpload } from '@ui/font';
import { ReactComponent as ArrowDownIcon } from '@assets/arrowdown.svg';
import { FontList } from './FontList';
import { FontSearch } from '@components';
import { SearchResult } from '@components/types';
import { useTextPanel } from '@store/properties';
import { getActiveText } from '@utils/text';

function Fonts() {
	const { font } = useTextPanel.getState();
	const [fontFamily, setFontFamily] = useState(font.family);
	const [openModal, setOpenModal] = useState(false);
	const [searchResult, setSearchResutl] = useState<SearchResult | undefined>(undefined);

	const handlerSearch = useCallback((result: SearchResult) => {
		setSearchResutl(result);
	}, []);

	useEffect(() => {
		const unsubTextPanel = useTextPanel
					.subscribe((state) => state.font, ({ family }) => setFontFamily(family));

		const object = getActiveText();

		if (object) {
			setFontFamily(object.fontFamily);
		}

		return () => {
			unsubTextPanel();
		}
	}, []);

	return (
		<Flex justifyContent='space-between' alignItems='center' gap={2} h='30px' pos='relative'>
			<Text fontSize='13px' color='title'>Font</Text>
			<Button 
				variant='outlineFree' 
				h='30px' 
				w='62%' 
				px='10px' 
				py='0px'
				onClick={() => {
					setOpenModal(!openModal);
				}}
			>
				<Flex w='100%' alignItems='center' justifyContent='space-between'>
					<Text as='span' fontSize='13px'>{fontFamily}</Text>
					<ArrowDownIcon />
				</Flex>
			</Button>
			<Modal
				top='8.8rem'
				title='Fonts'
				isOpen={openModal} 
				onClose={() => setOpenModal(false)}
			>
				<FontSearch onSearch={handlerSearch} />
				<TabCenter 
					webPanel={
						<FontList searchResult={searchResult} />
					}
					customPanel={
						<MessageFontUpload />
					}
				/>
			</Modal>
		</Flex>
	);
}

export { Fonts };