// @ts-nocheck
import { useBasic } from '@store/properties';
import { Canvas } from '@const/canvas';
import { newGamma } from '@utils/color';
import { applyFilterToBackground } from '@utils/canvas';
import { fabric } from 'fabric';

function updateBrigtness(brightness: number) {
	const canvas = Canvas.get();

	const brightnessFilter = new fabric.Image.filters.Brightness({
		brightness,
	});

	applyFilterToBackground(brightnessFilter, 'brightness');

	canvas.renderAll();
}

function updateContrast(contrast: number) {
	const canvas = Canvas.get();

	const contrastFilter = new fabric.Image.filters.Contrast({
		contrast,
	});

	applyFilterToBackground(contrastFilter, 'contrast');

	canvas.renderAll();
}

function updateSaturation(saturation: number) {
	const canvas = Canvas.get();

	const saturationFilter = new fabric.Image.filters.Saturation({
		saturation,
	});

	applyFilterToBackground(saturationFilter, 'saturation');

	canvas.renderAll();
}

function updateGamma(gamma: number) {
	const canvas = Canvas.get();

	const gammaFilter = new fabric.Image.filters.Gamma({
		gamma: newGamma(gamma),
	});

	applyFilterToBackground(gammaFilter, 'gamma');

	canvas.renderAll();
}

function useGamma() {
	return useBasic
			.subscribe((state) => state.gamma, (gamma) => updateGamma(gamma));
}

function useBrightness() {
	return useBasic
			.subscribe((state) => state.brigtness, (brigtness) => updateBrigtness(brigtness));
}

function useContrast() {
	return useBasic
			.subscribe((state) => state.contrast, (contrast) => updateContrast(contrast));
}

function useSaturation() {
	return useBasic
			.subscribe((state) => state.saturation, (saturation) => updateSaturation(saturation));
}

function useFilterBasic() {
	const unsubBrightness = useBrightness();
	const unsubContrast = useContrast();
	const unsubSaturation = useSaturation();
	const unsubGamma = useGamma();

	return () => {
		unsubBrightness();
		unsubContrast();
		unsubSaturation();
		unsubGamma();		
	}
}

export function useAdjustSub() {
	const unsubFilterBasic = useFilterBasic();

	return () => {
		unsubFilterBasic();
	}
}