// @ts-nocheck
import { useState, useRef, useEffect, memo, useCallback, useMemo, MouseEventHandler } from 'react';
import { Box, Text, chakra } from '@chakra-ui/react';
import { ReactComponent as RangeInputIcon } from '@assets/rangeinput.svg';
import { degree, percentage } from '@const/symbols';
import { ComponentFloat, GroupButtonTransform } from '@ui';
import { convertRangeValue, calcNewTranslateX, convertCoordToDegress } from '@utils/transform';
import { useCanvas } from '@store/canvas';
import { useTransform } from '@store/transform';

const RangeInputTransform = memo(() => {
	const { setBackgroundRotation } = useMemo(() => {
		return useCanvas.getState()
	}, []);	

	const { rangeInfo, setRangeInfo } = useMemo(() => {
		return useTransform.getState();
	}, []);

	const [transformType, setTransformType] = useState<'rotate' | 'scale'>('rotate');

	const [translateX, setTranslateX] = useState(rangeInfo.rotate.translateX);
	const [total, setTotal] = useState(rangeInfo.rotate.degree);

	const handleInput = (e: MouseEvent, oldTranslateX: number) => {
		const { screenX } = e;
		const newTranslateX = translateX + (screenX - oldTranslateX);
		if (newTranslateX > 191) {
			setTranslateX(191);
		} else if (newTranslateX < -210) {
			setTranslateX(-210);
		} else {
			setTranslateX(newTranslateX);
		}	
	} 

	const handleRange: MouseEventHandler<HTMLDivElement> = (e) => {
		const { screenX } = e;
		const oldTranslateX = screenX;

		const handlerMouseMove = (e: MouseEvent) => handleInput(e, oldTranslateX);

		document.addEventListener('mousemove', handlerMouseMove);
		document.addEventListener('mouseup', () => {
			document.removeEventListener('mousemove', handlerMouseMove);
		});
	};

	const normalizeTotal = useCallback((translateX: number) => {
		let newTotal = convertCoordToDegress(translateX, total);

		setTotal(newTotal);		
	}, [total]);

	useEffect(() => {
		setRangeInfo({
			[transformType]: {
				degree: total,
				translateX,
			}
		});
	}, [total]);

	useEffect(() => {
		if (translateX === 0) return;
		normalizeTotal(translateX + 10);
	}, [translateX]);

	const symbol = useMemo(() => {
		if (transformType === 'scale') {
			return percentage;
		}

		return degree;
	}, [transformType]);

	const newTotal = useMemo(() => {
		if  (transformType === 'scale') {
			return convertRangeValue(total);
		}

		return total;
	}, [total, transformType]);

	useEffect(() => {
		const { rangeInfo } = useTransform.getState();
		if (transformType === 'scale') {
			setTranslateX(rangeInfo.scale.translateX);
			setTotal(rangeInfo.scale.degree);
		} else {
			setTranslateX(rangeInfo.rotate.translateX);
			setTotal(rangeInfo.rotate.degree);
		}
	}, [transformType]);


	const handleTransformControl = (transformType: 'rotate' | 'scale') => {
		setTransformType(transformType);
	};

	return (
		<ComponentFloat
			content={
				<GroupButtonTransform 
					onAction={handleTransformControl}
					actionType={transformType}
				/>
			}
			dir='bottom'
		>
			<Box 
				w='100%' 
				h='3.5em' 
				maxW='24em' 
				pos='relative'
				onMouseDown={handleRange}
			>
				<Text 
					as='span' 
					userSelect='none' 
					pos='absolute' 
					top='calc(50% - .6875em)' 
					left='calc(50% - 1.75em)' 
					w='3.5em' 
					h='1.5em' 
					textAlign='center' 
					fontSize='.75em'
				>
					{newTotal}
					{symbol}
				</Text>
				<Box 
					w='100%' 
					h='100%' 
					overflow='hidden'
					__css={{
						'mask': 'linear-gradient(90deg,transparent 0,#000 2em,#000 calc(50% - 3em),transparent 50%,#000 calc(50% + 3em),#000 calc(100% - 2em),transparent)'
					}}
				>
					<Box
						transform={`translateX(${translateX}px) translateY(0px)`} 
						h='100%'
						w='100%'
						transitionProperty='transform'
						transitionTimingFunction = 'cubic-bezier(0.4, 0, 0.2, 1)'
						transitionDuration= '0ms'
					>
						<RangeInputIcon />					
					</Box>
				</Box>
			</Box>
		</ComponentFloat>
	);
})

export { RangeInputTransform };