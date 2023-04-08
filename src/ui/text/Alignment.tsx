// @ts-nocheck
import { useState, useEffect } from 'react';
import { Button, Flex, Text } from '@chakra-ui/react';
import { ReactComponent as AlignmentLeftIcon } from '@assets/alignleft.svg';
import { ReactComponent as AlignmentCenterIcon } from '@assets/aligncenter.svg';
import { ReactComponent as AlignmentRightIcon } from '@assets/alignright.svg';
import { useTextPanel } from '@store/properties';
import { getActiveText } from '@utils/text';

function Alignment() {
	const { setAlignment } = useTextPanel.getState();
	const [ align, setAlign ] = useState('left');

	useEffect(() => {
		const unsubTextPanel = useTextPanel
				.subscribe((state) => state.alignment, setAlign);

		const object = getActiveText();

		if (object) {
			setAlign(object.textAlign);
		}			

		return () => {
			unsubTextPanel();
		}
	}, []);

	return (
		<Flex justifyContent='center' alignItems='center' justifyContent='space-between' gap={2}>
			<Text color='title' fontSize='13px'>Alignment</Text>
			<Flex justifyContent='center' alignItems='center'>
				<Button 
					h='30px' 
					minW='38px' 
					variant='ghost'
					backgroundColor={align === 'left' ? 'gray.400' : undefined}
					onClick={() => {
						setAlignment('left');
					}}
				>
					<AlignmentLeftIcon />
				</Button>
				<Button 
					h='30px' 
					minW='38px' 
					variant='ghost'
					backgroundColor={align === 'center' ? 'gray.400' : undefined}
					onClick={() => {
						setAlignment('center');
					}}
				>
					<AlignmentCenterIcon />
				</Button>
				<Button 
					h='30px' 
					minW='38px' 
					variant='ghost'
					backgroundColor={align === 'right' ? 'gray.400' : undefined}
					onClick={() => {
						setAlignment('right');
					}}
				>
					<AlignmentRightIcon />
				</Button>
			</Flex>
		</Flex>
	);
}

export { Alignment };