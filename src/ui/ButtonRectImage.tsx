// @ts-nocheck
import { useState, useRef } from 'react';
import { Button, Box } from '@chakra-ui/react';

interface ButtonRectImageProps {
	bg?: string;
	backgroundColor?: string;
	children?: JSX.Element;
	onClick?: (e: MouseEvent) => void;
	w?: string;
	h?: string;
	focus?: boolean;
}

function ButtonRectImage(props: ButtonRectImageProps) {
	const refContainer = useRef<HTMLELement>(null);
	const [ bgCover, setBgCover ] = useState('');

	const { children, bg, onClick, w, h, focus, backgroundColor } = props;

	return (
		<Button 
			backgroundImage={bg ? `url(${bg})` : ''} 
			backgroundColor={backgroundColor}
			variant='squareImage' 
			overflow='hidden' 
			pos='relative' 
			w={w || '182px'} 
			h={h || '86px'}
		>
			{children}
			<Box 
				ref={refContainer}
				w='full' 
				h='full'
				onClick={onClick} 
				pos='absolute'
				borderRadius='base' 
				backgroundColor={focus ? 'blueAplha.200' : bgCover}
				border={'1px solid transparent'}
				borderColor={focus ? 'blue.600' : ''}
				onMouseOver={() => setBgCover('grayAlpha.100')} 
				onMouseLeave={() => setBgCover('')} 
			/>
		</Button>
	);
}

export { ButtonRectImage };