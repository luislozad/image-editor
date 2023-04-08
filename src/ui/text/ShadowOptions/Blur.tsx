import { Container } from '../Container';
import { Title } from '../Title';
import { InputNumber } from '@ui';

interface BlurProps {
	value: number;
	onChange: (value: number) => void;
}

function Blur(props: BlurProps) {
	const { value, onChange } = props;

	return (
		<Container>
			<Title>Blur</Title>	
			<InputNumber value={value} onChange={onChange} />
		</Container>
	);
}

export { Blur };