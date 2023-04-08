import { useState, useEffect } from 'react';
import { Image, Box } from '@chakra-ui/react';
import { 
	GridContent, 
	SquareButton, 
	Title, 
	Spacer, 
	ButtonRectImage, 
	TextCover,
} from '@ui';
import { Block } from '@ui/transform/Block';
import { Explorer } from '@components';
import { useOverlayspanel } from '@store/properties';
import { getOverlay } from '@utils/resources';


function Overlays() {
	const [active, setActive] = useState('none');
	const { setRecurce } = useOverlayspanel.getState();

	const handlerNewOverlays = (active: string) => {
		const resource = getOverlay(active);
		setRecurce(resource);
	};

	useEffect(() => {
		handlerNewOverlays(active);
	}, [active]);

	return (
		<>			
			<Title text='Overlays' />

			<Spacer />

			<Explorer>
				<GridContent title=''>
					<ButtonRectImage
						focus={active === 'Golden'}
						bg={'overlays/overlay_golden.jpg'}
						w={'87px'}
						h={'87px'}
						onClick={() => {
							setActive('Golden');
						}}										
					>
						<TextCover text={'Golden'} />						
					</ButtonRectImage>

					<ButtonRectImage
						focus={active === 'Light Leak 1'}
						bg={'overlays/overlay_lightleak1.jpg'}
						w={'87px'}
						h={'87px'}
						onClick={() => {
							setActive('Light Leak 1');
						}}										
					>
						<TextCover text={'Light Leak 1'} />						
					</ButtonRectImage>

					<ButtonRectImage
						focus={active === 'Rain'}
						bg={'overlays/overlay_rain.jpg'}
						w={'87px'}
						h={'87px'}
						onClick={() => {
							setActive('Rain');
						}}										
					>
						<TextCover text={'Rain'} />						
					</ButtonRectImage>

					<ButtonRectImage
						focus={active === 'Mosaic'}
						bg={'overlays/overlay_mosaic.jpg'}
						w={'87px'}
						h={'87px'}
						onClick={() => {
							setActive('Mosaic');
						}}										
					>
						<TextCover text={'Mosaic'} />						
					</ButtonRectImage>

					<ButtonRectImage
						focus={active === 'Vintage'}
						bg={'overlays/overlay_vintage.jpg'}
						w={'87px'}
						h={'87px'}
						onClick={() => {
							setActive('Vintage');
						}}										
					>
						<TextCover text={'Vintage'} />						
					</ButtonRectImage>

					<ButtonRectImage
						focus={active === 'Paper'}
						bg={'overlays/overlay_paper.jpg'}
						w={'87px'}
						h={'87px'}
						onClick={() => {
							setActive('Paper');
						}}										
					>
						<TextCover text={'Paper'} />						
					</ButtonRectImage>

					<ButtonRectImage
						focus={active === 'Bokeh'}
						bg={'overlays/overlay_bokeh.jpg'}
						w={'87px'}
						h={'87px'}
						onClick={() => {
							setActive('Bokeh');
						}}										
					>
						<TextCover text={'Bokeh'} />						
					</ButtonRectImage>

					<ButtonRectImage
						focus={active === 'Hearts'}
						bg={'overlays/overlay_hearts.jpg'}
						w={'87px'}
						h={'87px'}
						onClick={() => {
							setActive('Hearts');
						}}										
					>
						<TextCover text={'Hearts'} />						
					</ButtonRectImage>

					<ButtonRectImage
						focus={active === 'Light Leak 2'}
						bg={'overlays/overlay_lightleak2.jpg'}
						w={'87px'}
						h={'87px'}
						onClick={() => {
							setActive('Light Leak 2');
						}}										
					>
						<TextCover text={'Light Leak 2'} />						
					</ButtonRectImage>

					<ButtonRectImage
						focus={active === 'Wood'}
						bg={'overlays/overlay_wood.jpg'}
						w={'87px'}
						h={'87px'}
						onClick={() => {
							setActive('Wood');
						}}										
					>
						<TextCover text={'Wood'} />						
					</ButtonRectImage>

					<ButtonRectImage
						focus={active === 'Chop'}
						bg={'overlays/overlay_chop.jpg'}
						w={'87px'}
						h={'87px'}
						onClick={() => {
							setActive('Chop');
						}}										
					>
						<TextCover text={'Chop'} />						
					</ButtonRectImage>

					<ButtonRectImage
						focus={active === 'Metal'}
						bg={'overlays/overlay_metal.jpg'}
						w={'87px'}
						h={'87px'}
						onClick={() => {
							setActive('Metal');
						}}										
					>
						<TextCover text={'Metal'} />						
					</ButtonRectImage>

					<ButtonRectImage
						focus={active === 'Painting'}
						bg={'overlays/overlay_painting.jpg'}
						w={'87px'}
						h={'87px'}
						onClick={() => {
							setActive('Painting');
						}}										
					>
						<TextCover text={'Painting'} />						
					</ButtonRectImage>

					<ButtonRectImage
						focus={active === 'Grain'}
						bg={'overlays/overlay_grain.jpg'}
						w={'87px'}
						h={'87px'}
						onClick={() => {
							setActive('Grain');
						}}										
					>
						<TextCover text={'Grain'} />						
					</ButtonRectImage>

					<ButtonRectImage
						focus={active === 'Clouds'}
						bg={'overlays/overlay_clouds.jpg'}
						w={'87px'}
						h={'87px'}
						onClick={() => {
							setActive('Clouds');
						}}										
					>
						<TextCover text={'Clouds'} />						
					</ButtonRectImage>

					<ButtonRectImage
						focus={active === 'Wall'}
						bg={'overlays/overlay_wall1.jpg'}
						w={'87px'}
						h={'87px'}
						onClick={() => {
							setActive('Wall');
						}}										
					>
						<TextCover text={'Wall'} />						
					</ButtonRectImage>

					<ButtonRectImage
						focus={active === 'Wall 2'}
						bg={'overlays/overlay_wall2.jpg'}
						w={'87px'}
						h={'87px'}
						onClick={() => {
							setActive('Wall 2');
						}}										
					>
						<TextCover text={'Wall 2'} />						
					</ButtonRectImage>
				</GridContent>
			</Explorer>
		</>
	);
}

export { Overlays };