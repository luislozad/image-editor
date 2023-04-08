// @ts-nocheck
import React from 'react';
import { fabric } from 'fabric';
import { useCanvas } from '@store/canvas';
import { useTransform, RangeValue } from '@store/transform';
import { useBasic, useRefinements } from '@store/properties';
import { Canvas } from '@const/canvas';
import { autoImageScale } from '@utils/canvas';
import { convertRangeValue } from '@utils/transform';

function updateBackground(url: string) {
	const canvas = Canvas.get();
	
	fabric.Image.fromURL(url, (image) => {
		if (!canvas) return;

		const canvasWidth = canvas.get('width');
		const canvasHeight = canvas.get('height');

		const imageWidth = image.get('width');
		const imageHeight = image.get('height');

		if (imageWidth > canvasWidth) {
			canvas.setZoom(canvasWidth / imageWidth);
		} else if (imageHeight > canvasHeight) {
			canvas.setZoom(canvasHeight / imageHeight);
		}

		const newCanvas = canvas.setBackgroundImage(
			image, 
			canvas.renderAll.bind(canvas),
			{
				originX: 'left',
				originY: 'top'
			}
		);

		canvas.renderAll();

		Canvas.set(newCanvas);
	});	
}

function updateBackgroundRotation(rotate: RangeValue) {
	const { degree: rotation } = rotate;
	const canvas = Canvas.get();
	const background = canvas.backgroundImage;

	background._setOriginToCenter();

	background.originX = 'center';
	background.originY = 'center';

	// autoImageScale(background, rotation);
	
	background.set('angle', rotation).setCoords();
	
	background._resetOrigin();

	canvas.renderAll();
}

function updateBackgroundScale(scale: RangeValue) {
	const canvas = Canvas.get();
	const { degree } = scale;

	const scaleValue = convertRangeValue(degree);

	const background = canvas.backgroundImage;

	background._setOriginToCenter();

	background.originX = 'center';
	background.originY = 'center';	

	background.scale(1 + (scaleValue / 100), {
		x: background.left + background.width / 2,
		y: background.top + background.height / 2
	});

	background._resetOrigin();

	canvas.renderAll();
}

function useBackgroundScale() {
	return useTransform
			.subscribe((state) => state.rangeInfo, ({ scale }) => updateBackgroundScale(scale));
}

function useBackgroundRotation() {
	return useTransform
			.subscribe((state) => state.rangeInfo, ({ rotate }) => updateBackgroundRotation(rotate));
}

function useBackground() {
	return useCanvas
			.subscribe((state) => state.bg, (bg) => updateBackground(bg));
}

export function useCanvasSub() {
	const unsubBackgroundRotation = useBackgroundRotation();
	const unsubBackgroundScale = useBackgroundScale();
	const unsubBackground = useBackground();

	return () => {
		unsubBackgroundRotation();
		unsubBackgroundScale();
		unsubBackground();
	}
}