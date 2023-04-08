// @ts-nocheck
import { ButtonTooltip } from '@ui';
import { ButtonProps } from './types';
import { ReactComponent as FilterIcon } from '@assets/filter.svg';

function Filters(props: ButtonProps) {
	const { onClick, focus } = props;

	return (
		<ButtonTooltip 
			onClick={onClick} 
			label='Filters' 
			ariaLabel='Filters'
			focus={focus}
		>
			<FilterIcon />
		</ButtonTooltip>
	);
}

export { Filters };