// @ts-nocheck
import { ButtonTooltip } from '@ui';
import { ButtonProps } from './types';
import { ReactComponent as LibraryIcon } from '@assets/library.svg';

function Library(props: ButtonProps) {
	const { onClick, focus } = props;

	return (
		<ButtonTooltip 
			onClick={onClick} 
			label='Library' 
			ariaLabel='Library'
			focus={focus}
		>
			<LibraryIcon />
		</ButtonTooltip>
	);
}

export { Library };