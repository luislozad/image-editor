// @ts-nocheck
import { useState, useEffect } from 'react';
import { Flex, Input, Text } from '@chakra-ui/react';
import { useTextPanel } from '@store/properties';
import { getActiveText } from '@utils/text';

function Content(props: ContentProps) {
	const { setContent } = useTextPanel.getState();
	const [ value, setValue ] = useState('');

	useEffect(() => {
		const unsubTextPanel = useTextPanel
				.subscribe((state) => state.content, setValue);

		const object = getActiveText();

		if (object) {
			setValue(object.text);
		}

		return () => {
			unsubTextPanel();
		}
	}, []);

	return (
		<Flex alignItems='center' justifyContent='space-between' gap={2} w='100%' h='30px'>
			<Text color='title' fontSize='13px'>Content</Text>
			<Input 
				h='15px'
				w='110px'
				value={value}
				variant='inputTextLeft' 
				onChange={({ target }) => {
					setContent(target.value);
				}} 
			/>
		</Flex>
	);
}

export { Content };