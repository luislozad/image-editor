// @ts-nocheck
import { Box, Icon } from '@chakra-ui/react';
import { ReactComponent as CheckerBoardIcon } from '@assets/checkerboard.svg';
import { RGBA } from '@interfaces/color';

interface ColorBoxProps {
	rgba: RGBA;
}

function ColorBox(props: ColorBoxProps) {
	const { rgba } = props;
	const [red, green, blue, alpha] = rgba;

	return (
		<Box pos='relative'>
			<Box
				pos='relative'
				zIndex='2' 
				w='22px' 
				h='22px'
				borderRadius='4px'
				style={{
					boxShadow: 'inset 0 0 0 1px rgba(0, 0, 0, 0.1)',
					backgroundColor: `rgba(${red}, ${green}, ${blue}, ${alpha})`
				}}
			>
				
			</Box>
			<Icon 
				as={CheckerBoardIcon} 
				pos='absolute'
				boxSize='20px !important'
				inset='0px'
				left='1px'
				top='1px'
			/>
		</Box>
	)
}

export { ColorBox };