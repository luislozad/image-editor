// @ts-nocheck
import { ButtonTooltip } from '@ui';
import { ButtonProps } from './types';
import { ReactComponent as TextDesignIcon } from '@assets/textDesign.svg';

function TextDesign(props: ButtonProps) {
	const { onClick, focus } = props;

	return (
		<ButtonTooltip 
			onClick={onClick} 
			label='Text design' 
			ariaLabel='Text design'
			focus={focus}
		>
			<TextDesignIcon />
		</ButtonTooltip>
	);
}

export { TextDesign };