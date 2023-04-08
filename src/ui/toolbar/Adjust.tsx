// @ts-nocheck
import { ButtonTooltip } from '@ui';
import { ButtonProps } from './types';
import { ReactComponent as AdjustIcon } from '@assets/adjust.svg';

function Adjust(props: ButtonProps) {
	const { onClick, focus } = props;

	return (
		<ButtonTooltip 
			onClick={onClick} 
			label='Adjust' 
			ariaLabel='Adjust'
			focus={focus}
		>
			<AdjustIcon />
		</ButtonTooltip>
	);
}

export { Adjust };