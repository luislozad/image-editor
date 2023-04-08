import { Flex } from '@chakra-ui/react';
import { PositionX } from './PositionX';
import { PositionY } from './PositionY';

interface PositionProps {
	pos: {
		x: number;
		y: number;
	};
	onChange: (pos: { x: number, y: number }) => void;
}

function Position(props: PositionProps) {
	const { pos, onChange } = props;

	return (
		<Flex gap={3} direction='column'>
			<PositionX value={pos.x} onChange={(value: number) => onChange({ x: value, y: pos.y })} />
			<PositionY value={pos.y} onChange={(value: number) => onChange({ x: pos.x, y: value })} />
		</Flex>
	);
}

export { Position };