// @ts-nocheck
import { ButtonTooltip } from '@ui';
import { ButtonProps } from './types';
import { ReactComponent as FocusIcon } from '@assets/focus.svg';

function Focus(props: ButtonProps) {
	const { onClick, focus } = props;

	return (
		<ButtonTooltip 
			onClick={onClick} 
			label='Focus' 
			ariaLabel='Focus'
			focus={focus}
		>
			<FocusIcon />
		</ButtonTooltip>
	);
}

export { Focus };