// @ts-nocheck
import { useState, useEffect } from 'react';
import { Box } from '@chakra-ui/react';
import { Container } from './Container';
import { Title } from './Title';
import { InputNumber } from '@ui';
import { useTextPanel } from '@store/properties';
import { getActiveText } from '@utils/text';

function Line() {
	const [ value, setValue ] = useState(1.16);

	useEffect(() => {
		const unsubTextPanel = useTextPanel
			.subscribe((state) => state.line, setValue);

		const object = getActiveText();

		if (object) {
			setValue(object.lineHeight);
		}	

		return () => {
			unsubTextPanel();
		}
	}, []);

	return (
		<Container>
			<Title>Line</Title>
			<Box w='62%'>
				<InputNumber 
					value={value}
					valueChange={0.01}
					onChange={(line) => {
						const { setFontLine } = useTextPanel.getState();
						if (line >= 0) {
							setFontLine(Number(line.toFixed(2)));
						}
					}} 
				/>				
			</Box>
		</Container>
	);
}

export { Line };