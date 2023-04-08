// @ts-nocheck
import { useState, useEffect } from 'react';
import { Container } from './Container';
import { Title } from './Title';
import { Button, Text, Flex } from '@chakra-ui/react';
import { Modal, ColorBox, ColorPicker } from '@ui';
import { ShadowOptions } from '@ui/text';
import { hexToRGBA } from '@utils/color';
import { getActiveText, getShadowState } from '@utils/text';
import { useTextPanel } from '@store/properties';
import { Shadow } from '@interfaces/effect';
import { shadowDefault } from '@const/data';

function Shadow() {
	const [ shadow, setShadow ] = useState<Shadow | null>(null);

	const [ showColorSelect, setShowColorSelect ] = useState(false);

	const [openModal, setOpenModal] = useState(false);

	useEffect(() => {
		const unsubTextPanel = useTextPanel
			.subscribe((state) => state.shadow, setShadow);


		const object = getActiveText();

		if (object) {
			const shadow = getShadowState(object);
			setShadow(shadow);
		}

		return () => {
			unsubTextPanel();
		}
	}, []);

	return (
		<Container>
			<Title>Shadow</Title>
			<Button
				pos='relative'
				variant='outline' 
				h='30px' 
				w='62%'
				py='2px'
				px='8px'
				onClick={() => {
					if (!shadow) {
						const { setShadow } = useTextPanel.getState();
						setShadow(shadowDefault);
					}
					setOpenModal(true);
				}}
			>
				<Flex 
					w='100%' 
					h='100%'
					pos='relative'
					opacity={!shadow ? 0.5 : 1}
					justifyContent='flex-start'
					alignItems='center'
					gap={2}

				>
					<ColorBox rgba={hexToRGBA(shadow ? shadow.color.value : '#FFFFFF', shadow ? shadow.color.opacity : 0)} />
					{
						shadow && (
							<Text 
								h='100%'
								lineHeight={2}
								as='span'
							>
								{shadow.pos.x}, {shadow.pos.y}, {shadow.blur}
							</Text>
						)
					}
					{
						!shadow && (
							<Text
								h='100%'
								lineHeight={2}
								as='span'
								textTransform='none'
							>
								Add...
							</Text>
						) 
					}
				</Flex>
			</Button>
			<Modal
				top='16em'
				title={showColorSelect ? 'Color' : 'Shadow'}
				isOpen={openModal && shadow}
				navegation={showColorSelect}
				onNavegation={() => {
					setShowColorSelect(false);
				}}
				onClose={() => {
					setOpenModal(false)
					setShowColorSelect(false);
				}}				
			>
				{ showColorSelect && shadow && (
					<ColorPicker 
						color={shadow.color}
						onChange={(color) => {
							const { shadow, setShadow } = useTextPanel.getState();
							setShadow({
								...shadow,
								color
							});
						}} 
					/>
				  ) 
				}
				{ !showColorSelect && shadow && (
					<ShadowOptions 
						value={shadow} 
						onColorSelect={() => setShowColorSelect(true)} 
						onPosChange={(pos) => {
							const { shadow, setShadow } = useTextPanel.getState();
							setShadow({
								...shadow,
								pos,
							});
						}} 
						onBlurChange={(blur) => {
							const { shadow, setShadow } = useTextPanel.getState();
							setShadow({
								...shadow,
								blur,
							});
						}} 
					/>
				  ) 
				}
			</Modal>
		</Container>
	);
}

export { Shadow };