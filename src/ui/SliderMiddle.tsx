// @ts-nocheck
import { Slider, SliderProps } from './Slider';

interface SliderMiddleProps extends SliderProps {

}

function SliderMiddle(props: SliderMiddleProps) {
	const { defaultValue, onChange } = props;

	return (
		<Slider defaultValue={defaultValue} onChange={onChange} startPoint={0} min={-1} max={1} step={0.01} />
	);
}

export { SliderMiddle };