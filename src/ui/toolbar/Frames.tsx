// @ts-nocheck
import { ButtonTooltip } from '@ui';
import { ButtonProps } from './types';
import { ReactComponent as FramesIcon } from '@assets/frames.svg';

function Frames(props: ButtonProps) {
	const { onClick, focus } = props;

	return (
		<ButtonTooltip 
			onClick={onClick} 
			label='Frames' 
			ariaLabel='Frames'
			focus={focus}
		>
			<FramesIcon />
		</ButtonTooltip>
	);
}

export { Frames };