// @ts-nocheck
import { useState, useEffect } from 'react';
import { Box } from '@chakra-ui/react';
import { Container } from './Container';
import { Title } from './Title';
import { InputNumber } from '@ui';
import { useTextPanel } from '@store/properties';
import { getActiveText } from '@utils/text';

function Letter() {
	const [ value, setValue ] = useState(0);

	useEffect(() => {
		const unsubTextPanel = useTextPanel
			.subscribe((state) => state.letter, setValue);

		const object = getActiveText();

		if (object) {
			setValue(object.charSpacing);
		}			
	}, [])

	return (
		<Container>
			<Title>Letter</Title>
			<Box w='62%'>
				<InputNumber 
					value={value} 
					onChange={(letter) => {
						const { setFontLetter } = useTextPanel.getState();
						setFontLetter(letter);
					}} 
				/>				
			</Box>
		</Container>
	);
}

export { Letter };