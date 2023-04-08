// @ts-nocheck
import { fabric } from 'fabric';
import { Canvas } from '@const/canvas';
import { useOverlayspanel } from '@store/properties';
import { applyFilterToBackground } from '@utils/canvas';

function updateOverImage(url: string) {
	const canvas = Canvas.get();

	fabric.Image.fromURL(url, (image) => {
		const overlayFilter = new fabric.Image.filters.BlendImage({
			image: image,
			mode: 'multiply',
			alpha: 0.5
		});

		// canvas.overlayImage = image;
		// canvas.overlayImage.set('opacity', 0.5);
		applyFilterToBackground(overlayFilter, 'overlay');

		canvas.renderAll();
	});
}


function useOverImage() {
	return useOverlayspanel
			.subscribe((state) => state.recurce, (recurce) => updateOverImage(recurce));
}

export function useOverlaysSub() {
	const unsubOverImage = useOverImage();

	return () => {
		unsubOverImage();
	}
}