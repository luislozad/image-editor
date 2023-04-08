import { useState } from 'react';
import { Image } from '@chakra-ui/react';
import { GridContent, SquareButton, Title, Spacer, ButtonRectImage } from '@ui';
import { Block } from '@ui/transform/Block';
import { Explorer } from '@components';

function Frames() {
	const [ active, setActive ] = useState(-1);

	return (
		<>			
			<Title text='Frames' />

			<Spacer />

			<Explorer>
				<GridContent title=''>
					<ButtonRectImage
						focus={active === 1}
						backgroundColor='gray.200'
						w={'87px'}
						h={'87px'}
						onClick={() => {
							setActive(1);
						}}						
					>
						<Block 
							icon={<Image src='frames/frame_dia.png' w='80%' mx='auto' />}
							name=''
						/>
					</ButtonRectImage>

					<ButtonRectImage
						focus={active === 2}
						backgroundColor='gray.200'
						w={'87px'}
						h={'87px'}
						onClick={() => {
							setActive(2);
						}}						
					>
						<Block 
							icon={<Image src='frames/frame_art_decor.png' w='80%' mx='auto' />}
							name=''
						/>	
					</ButtonRectImage>

					<ButtonRectImage
						focus={active === 3}
						backgroundColor='gray.200'
						w={'87px'}
						h={'87px'}
						onClick={() => {
							setActive(3);
						}}						
					>
						<Block 
							icon={<Image src='frames/frame_black_passepartout.png' w='80%' mx='auto' />}
							name=''
						/>
					</ButtonRectImage>

					<ButtonRectImage
						focus={active === 4}
						backgroundColor='gray.200'
						w={'87px'}
						h={'87px'}
						onClick={() => {
							setActive(4);
						}}						
					>
						<Block 
							icon={<Image src='frames/frame_wood_passepartout.png' w='80%' mx='auto' />}
							name=''
						/>
					</ButtonRectImage>

					<ButtonRectImage
						focus={active === 5}
						backgroundColor='gray.200'
						w={'87px'}
						h={'87px'}
						onClick={() => {
							setActive(5);
						}}						
					>
						<Block 
							icon={<Image src='frames/frame_lowpoly_shadow.png' w='80%' mx='auto' />}
							name=''
						/>	
					</ButtonRectImage>
				</GridContent>
			</Explorer>
		</>
	);
}

export { Frames };