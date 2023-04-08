// @ts-nocheck
import { ButtonTooltip } from '@ui';
import { ButtonProps } from './types';
import { ReactComponent as StickersIcon } from '@assets/stickers.svg';

function Stickers(props: ButtonProps) {
	const { onClick, focus } = props;

	return (
		<ButtonTooltip 
			onClick={onClick} 
			label='Stickers' 
			ariaLabel='Stickers'
			focus={focus}
		>
			<StickersIcon />
		</ButtonTooltip>
	);
}

export { Stickers };