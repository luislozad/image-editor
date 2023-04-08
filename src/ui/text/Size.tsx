// @ts-nocheck
import { useState, useEffect } from 'react';
import { Box } from '@chakra-ui/react';
import { Container } from './Container';
import { Title } from './Title';
import { InputNumber } from '@ui';
import { useTextPanel } from '@store/properties';
import { getActiveText } from '@utils/text';

function Size() {
	const [ value, setValue ] = useState(64);

	useEffect(() => {
		const unsubTextPanel = useTextPanel
			.subscribe((state) => state.size, setValue);

		const object = getActiveText();

		if (object) {
			setValue(object.fontSize);
		}	

		return () => {
			unsubTextPanel();
		}
	}, []);

	return (
		<Container>
			<Title>Size</Title>
			<Box w='62%'>
				<InputNumber value={value} onChange={(size) => {
					const { setFontSize } = useTextPanel.getState();

					if (size >= 0) {
						setFontSize(size);
					}
				}} />				
			</Box>
		</Container>
	);
}

export { Size };