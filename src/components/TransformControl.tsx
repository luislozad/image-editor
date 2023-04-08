// @ts-nocheck
import { useEffect, useRef, useState, RefObject } from 'react';
import { Grid, GridItem } from '@chakra-ui/react';
import Moveable from 'react-moveable';
import { Box } from '@chakra-ui/react';
import { generateGuides, calcFill, updateFill } from '@utils/transform';
import { FillControl } from './types';
import { TransformInstance } from '@const/transform';

function TransformControl() {
	const [target, setTarget] = useState<HTMLELement>(null);

	const refContainerControl = useRef<HTMLELement>(null);
	const refTranform = useRef<HTMLELement>(null);
	const refMoveable = useRef<HTMLELement>(null);

	const refFillTop = useRef<HTMLELement>(null);
	const refFillBottom = useRef<HTMLELement>(null);
	const refFillLeft = useRef<HTMLELement>(null);
	const refFillRight = useRef<HTMLELement>(null);

	useEffect(() => {
		if (refTranform.current) {
			setTarget(refTranform.current);
		}
	}, [refTranform]);

	useEffect(() => {
		const { setMoveable, setContainer } = TransformInstance;

		if (refMoveable.current && refContainerControl.current) {
			setMoveable(refMoveable.current);
			setContainer(refContainerControl.current);
		}

		return () => {
			setMoveable(null);
			setContainer(null);
		}
	}, [refMoveable, refContainerControl]);

	const guides = generateGuides();

	return (
		<Box pos='absolute' ref={refContainerControl} inset='0px'>
			<Grid 
				pos='absolute'
				w='100%'
				h='100%'
				bg='transparent'
				templateRows='repeat(3, 1fr)'
				templateColumns='repeat(3, 1fr)'					
				cursor='move'
				ref={refTranform}
			>
				{
					guides.map((child, i) => (
						<GridItem key={i}>{child}</GridItem>
					))
				}
			</Grid>
			<div 
				// t='top' 
				ref={refFillTop} 
				style={{ 
					inset: '0px', 
					width: '100%', 
					height: `0px`, 
					position: 'absolute', 
					background: 'rgba(255, 255, 255, 0.4)' 
				}}
			>
			</div>
			<div 
				// b='bottom' 
				ref={refFillBottom} 
				style={{ 
					inset: '0px', 
					width: '100%', 
					height: `0px`, 
					top: `100%`, 
					position: 'absolute', 
					background: 'rgba(255, 255, 255, 0.4)' 
				}}
			>
			</div>

			<div 
				// l='left' 
				ref={refFillLeft} 
				style={{ 
					inset: '0px', 
					width: `0px`, 
					height: `100%`, 
					top: `0px`, 
					position: 'absolute', 
					background: 'rgba(255, 255, 255, 0.4)' 
				}}
			>
			</div>
			<div 
				// r='right' 
				ref={refFillRight} 
				style={{ 
					inset: '0px', 
					width: `0px`, 
					height: `100%`, 
					top: `0px`, 
					left: `100%`, 
					position: 'absolute', 
					background: 'rgba(255, 255, 255, 0.4)' 
				}}
			>
			</div>

			<Moveable
				ref={refMoveable}
				origin={false}
				target={target}
				draggable={true}
				resizable={true}
				snapContainer={refContainerControl}
				snappable={true}
				scalable={true}
				snapDirections={{'top':true,'left':true,'bottom':true,'right':true}}
				bounds={{'left':0,'top':0,'right':0,'bottom':0,'position':'css'}}
				onDrag={e => {
				    e.target.style.transform = e.transform;
				    const position = calcFill({ 
				    	// @ts-ignore
				    	target: e.target!, 
				    	left: refFillLeft.current, 
				    	right: refFillRight.current, 
				    	top: refFillTop.current, 
				    	bottom: refFillBottom.current, 
				    });

				    updateFill({
				    	position,
				    	left: refFillLeft.current,
				    	right: refFillRight.current,
				    	top: refFillTop.current,
				    	bottom: refFillBottom.current,
				    });
				}}
				onScale={e => {
				    e.target.style.transform = e.drag.transform;
				    const position = calcFill({ 
				    	// @ts-ignore
				    	target: e.target!, 
				    	left: refFillLeft.current, 
				    	right: refFillRight.current, 
				    	top: refFillTop.current, 
				    	bottom: refFillBottom.current, 
				    });

				    updateFill({
				    	position,
				    	left: refFillLeft.current,
				    	right: refFillRight.current,
				    	top: refFillTop.current,
				    	bottom: refFillBottom.current,
				    });
				}}
                onResize={(e) => {
                    e.target.style.width = `${e.width}px`;
                    e.target.style.height = `${e.height}px`;
                    e.target.style.transform = e.drag.transform;
				    const position = calcFill({ 
				    	// @ts-ignore
				    	target: e.target!, 
				    	left: refFillLeft.current, 
				    	right: refFillRight.current, 
				    	top: refFillTop.current, 
				    	bottom: refFillBottom.current, 
				    });

				    updateFill({
				    	position,
				    	left: refFillLeft.current,
				    	right: refFillRight.current,
				    	top: refFillTop.current,
				    	bottom: refFillBottom.current,
				    });
                }}
			/>
		</Box>
	);
}

export { TransformControl };