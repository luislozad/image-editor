import SliderModel, { SliderProps as SliderModelProps } from 'rc-slider';

export interface SliderProps extends Omit<SliderModelProps, 'onChange' | 'defaultValue'> {
	onChange: (value: number) => void;
	defaultValue: number;
	startPoint?: number;
	min?: number;
	max?: number;
	step?: number;
}

export function Slider(props: SliderProps) {
	const { 
		defaultValue, 
		onChange, 
		startPoint, 
		min, 
		max, 
		step,
	} = props;
	return (
		<SliderModel 
			handleStyle={{
				height: 20,
				width: 20,
				borderColor: '#1e47fb',
				backgroundColor: '#eeeeee',
				marginTop: -9,
				opacity: 1
			}}
			trackStyle={{
				backgroundColor: '#1e47fb',
				height: '2px'
			}}
			railStyle={{
				background: 'linear-gradient(to right, rgb(204, 204, 204) 0%, rgb(204, 204, 204) 100%)',
				height: '2px'
			}}
			defaultValue={defaultValue} 
			onChange={(value) => {
				if (!Array.isArray(value)) {
					onChange(value);
				}
			}} 
			startPoint={startPoint} 
			min={min} 
			max={max} 
			step={step} 
		/>
	);
}