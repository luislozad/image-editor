// @ts-nocheck
import { useTransformPanel, TransformSize } from '@store/properties';
import { Canvas } from '@const/canvas';
import { TransformInstance } from '@const/transform';
import { parseAspectRatio, resizeImage } from '@utils/image';

function updateBackgroundSize(size: TransformSize) {
	const canvas = Canvas.get();
	const { width, height } = size;
	console.log({ width, height }, )

	const background = canvas.backgroundImage;

	// background.scaleToWidth(width);
	// background.scaleToHeight(height);

	background.width = width;
	background.height = height;

	canvas.renderAll();
}

function updateCropSize(type: string) {
	// const canvas = Canvas.get();
	// const background = canvas.backgroundImage;
	const { moveable, container } = TransformInstance.get();
	
	const containerInfo = container.getBoundingClientRect();

	const calcImageSize = (ratio: string) => {
		const aspectRatio = parseAspectRatio(ratio);
		const newSize = resizeImage(containerInfo, aspectRatio);

		return newSize;
	}

	if (type === 'square') {
		const { width, height } = calcImageSize('1:1');
		moveable.request('resizable', {
			offsetWidth: width,
			offsetHeight: height,
		}, true);
		moveable.request('draggable', {
			x: (containerInfo.width / 2) - (width / 2),
			y: containerInfo.top,
		}, true)
	} else if (type === '4:3') {
		const { width, height } = calcImageSize('4:3');
		moveable.request('resizable', {
			offsetWidth: width,
			offsetHeight: height,
		}, true);
		moveable.request('draggable', {
			x: (containerInfo.width / 2) - (width / 2),
			y: containerInfo.top,
		}, true)
	} else if (type === '16:9') {
		const { width, height } = calcImageSize('16:9');
		moveable.request('resizable', {
			offsetWidth: width,
			offsetHeight: height,
		}, true);
		moveable.request('draggable', {
			x: (containerInfo.width / 2) - (width / 2),
			y: containerInfo.top,
		}, true)
	} else if (type === '3:4') {
		const { width, height } = calcImageSize('3:4');
		moveable.request('resizable', {
			offsetWidth: width,
			offsetHeight: height,
		}, true);
		moveable.request('draggable', {
			x: (containerInfo.width / 2) - (width / 2),
			y: containerInfo.top,
		}, true)
	} else if (type === '9:16') {
		const { width, height } = calcImageSize('9:16');
		moveable.request('resizable', {
			offsetWidth: width,
			offsetHeight: height,
		}, true);
		moveable.request('draggable', {
			x: (containerInfo.width / 2) - (width / 2),
			y: containerInfo.top,
		}, true)
	
	} else {

	}
}

function useType() {
	return useTransformPanel
			.subscribe((state) => state.type, updateCropSize);
}

function useSize() {
	return useTransformPanel
			.subscribe((state) => state.size, updateBackgroundSize);
}

export function useTransformSub() {
	const unsubSize = useSize();
	const unsubType = useType();

	return () => {
		unsubSize();
		unsubType();
	}
}