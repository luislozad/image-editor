import { Container } from '../Container';
import { Title } from '../Title';
import { InputNumber } from '@ui';

interface PositionYProps {
	value: number;
	onChange: (value: number) => void;
}

function PositionY(props: PositionYProps) {
	const { value, onChange } = props;

	return (
		<Container>
			<Title>Y</Title>
			<InputNumber value={value} onChange={onChange} />
		</Container>
	);
}

export { PositionY }