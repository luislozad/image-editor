// @ts-nocheck
import { ButtonTooltip } from '@ui';
import { ButtonProps } from './types';
import { ReactComponent as OverlaysIcon } from '@assets/overlays.svg';

function Overlays(props: ButtonProps) {
	const { onClick, focus } = props;

	return (
		<ButtonTooltip 
			onClick={onClick} 
			label='Overlays' 
			ariaLabel='Overlays'
			focus={focus}
		>
			<OverlaysIcon />
		</ButtonTooltip>
	);
}

export { Overlays };