// @ts-nocheck
import { ButtonTooltip } from '@ui';
import { ButtonProps } from './types';
import { ReactComponent as BurshIcon } from '@assets/brush.svg';

function Brush(props: ButtonProps) {
	const { onClick, focus } = props;

	return (
		<ButtonTooltip 
			onClick={onClick} 
			label='Brush' 
			ariaLabel='Brush'
			focus={focus}
		>
			<BurshIcon />
		</ButtonTooltip>
	);
}

export { Brush };