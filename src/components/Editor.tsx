// @ts-nocheck
import { useEffect, useRef } from 'react';
import { Box } from '@chakra-ui/react';
import { Canvas } from '@const/canvas';
import { useCanvas } from '@store/canvas';
import { TransformControl } from '@components';
import { shallow } from 'zustand/shallow';

function Editor() {
	const refCanvas = useRef<HTMLCanvasElement>(null);
	const refContainer = useRef<HTMLDivElement>(null);

	const [ fetchCanvasData, transformControl ] = useCanvas((state) => [ 
		state.fetchCanvasData, 
		state.transformControl, 
	], shallow);

	useEffect(() => {
		if (refCanvas.current && refContainer.current) {
			const canvas = refCanvas.current;
			const container = refContainer.current;

			const { width, height } = container.getBoundingClientRect();
			
			canvas.width = width;
			canvas.height = height;
			
			Canvas.init(refCanvas.current);
			fetchCanvasData();
		}
	}, [refCanvas, refContainer]);

	return (
		<Box pos='relative' w='100%' h='100%' ref={refContainer}>
			<canvas id='editor' ref={refCanvas}></canvas>
			{ transformControl && <TransformControl /> }
		</Box>
	);
}

export { Editor };