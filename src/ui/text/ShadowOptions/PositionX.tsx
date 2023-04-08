import { Container } from '../Container';
import { Title } from '../Title';
import { InputNumber } from '@ui';

interface PositionXProps {
	value: number;
	onChange: (value: number) => void;
}

function PositionX(props: PositionXProps) {
	const { value, onChange } = props;

	return (
		<Container>
			<Title>X</Title>
			<InputNumber value={value} onChange={onChange} />
		</Container>
	);
}

export { PositionX };