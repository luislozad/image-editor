// @ts-nocheck
import { useState, useEffect } from 'react';
import { Container } from './Container';
import { Title } from './Title';
import { Select } from '@chakra-ui/react';
import { useTextPanel } from '@store/properties';
import { getActiveText, getTextDecorationState } from '@utils/text';

function Decoration() {
	const [ value, setValue ] = useState('none');

	useEffect(() => {
		const unsubTextPanel = useTextPanel
			.subscribe((state) => state.decoration, setValue);

		const object = getActiveText();

		if (object) {
			const style = getTextDecorationState(object);
			setValue(style);
		}

		return () => {
			unsubTextPanel();
		}
	}, []);

	return (
		<Container>
			<Title>Decoration</Title>
			<Select
				value={value}
				onChange={({ target }) => {
					const { setTextDecoration } = useTextPanel.getState();
					setTextDecoration(target.value);
				}}
				width='62%'
				variant='neutral'
			>
				<option value='none'>None</option>
				<option value='overline'>Overline</option>
				<option value='underline'>Underline</option>
				<option value='linethrough'>Linethrough</option>
			</Select>
		</Container>
	);
}

export { Decoration };