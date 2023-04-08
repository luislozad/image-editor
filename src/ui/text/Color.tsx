// @ts-nocheck
import { useState, useEffect, useCallback, memo } from 'react';
import { Button, Box, Text } from '@chakra-ui/react';
import { Container } from './Container';
import { Title } from './Title';
import { useTextPanel } from '@store/properties';
import { Modal, ColorBox, ColorPicker } from '@ui';
import { hexToRGBA } from '@utils/color';
import { Color as IColor } from '@interfaces/color';
import { getActiveText } from '@utils/text';

const Color = memo(() => {
	const [ colorCurrent, setColorCurrent ] = useState<IColor>({
		value: '#FFFFFF',
		opacity: 1,
	});

	const [ openModal, setOpenModal ] = useState(false);

	useEffect(() => {
		const unsubTextPanel = useTextPanel
				.subscribe((state) => state.color, setColorCurrent);

		const object = getActiveText();

		if (object) {
			setColorCurrent({
				value: object.fill,
				opacity: object.opacity,
			});
		}

		return () => {
			unsubTextPanel();
		}
	}, []);

	return (
		<Container>
			<Title>Color</Title>
			<Button
				pos='relative'
				variant='outline' 
				h='30px' 
				w='62%'
				py='2px'
				px='8px'
				justifyContent='flex-start'
				alignItems='center'
				gap={2}
				onClick={() => setOpenModal(!openModal)}
			>
				<ColorBox rgba={hexToRGBA(colorCurrent.value, colorCurrent.opacity)} />
				<Text 
					h='100%'
					lineHeight={2}
					as='span'
				>
					{colorCurrent.value.toUpperCase()}
				</Text>
			</Button>
			<Modal
				top='13em'
				title='Color'
				isOpen={openModal} 
				onClose={() => setOpenModal(false)}				
			>
				<ColorPicker onChange={useTextPanel.getState().setColor} color={colorCurrent} />
			</Modal>
		</Container>
	);
})

export { Color };