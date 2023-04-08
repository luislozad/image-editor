// @ts-nocheck
import { ButtonTooltip } from '@ui';
import { ButtonProps } from './types';
import { ReactComponent as TextIcon } from '@assets/text.svg';

function Text(props: ButtonProps) {
	const { onClick, focus } = props;

	return (
		<ButtonTooltip 
			onClick={onClick} 
			label='Text' 
			ariaLabel='Text'
			focus={focus}
		>
			<TextIcon />
		</ButtonTooltip>
	);
}

export { Text };