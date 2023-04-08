// @ts-nocheck
import { Tooltip, Button, Box } from '@chakra-ui/react';

interface ButtonTooltipProps {
	children: JSX.Element;
	label: string;
	ariaLabel: string;
	onClick: MouseEvent;
	focus?: boolean;
}

function ButtonTooltip(props: ButtonTooltipProps) {
	const { 
		children: icon, 
		label, 
		ariaLabel, 
		onClick,
		focus
	} = props;

	return (
		<Box h='48px'>
			<Tooltip 
				label={label} 
				aria-label={ariaLabel} 
				hasArrow 
				placement='right'
				variant='x1'
				bg='gray.300'
				offset={[5, 15]}
			>
				<Button  h='48px' variant='ghost' onClick={onClick} color={focus ? 'blue.600' : ''}>
					{icon}
				</Button>
			</Tooltip >
		</Box>
	);
}

export { ButtonTooltip };