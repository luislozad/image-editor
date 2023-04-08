// @ts-nocheck
import { ButtonTooltip } from '@ui';
import { ButtonProps } from './types';
import { ReactComponent as TranformIcon } from '@assets/transform.svg';

function Transform(props: ButtonProps) {
	const { onClick, focus } = props;

	return (
		<ButtonTooltip 
			onClick={onClick} 
			label='Transform' 
			ariaLabel='Transform'
			focus={focus}
		>
			<TranformIcon />
		</ButtonTooltip>
	);
}


export { Transform };