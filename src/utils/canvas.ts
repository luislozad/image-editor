import { fabric } from 'fabric';
import { CalcAspectRatioProps } from './types';
import { Library, Filter } from '@store/types';
import { Canvas, canvasFilters, CollisionSystem } from '@const/canvas';
import { useTextPanel, defaultTextPanel } from '@store/properties';
import { useCanvas } from '@store/canvas';
import { TransformInstance } from '@const/transform';
import { createEdgesLines, createBox } from '@utils/helpers';
import { PositionNames } from '@utils/types';

export function calcAspectRatio(props: CalcAspectRatioProps) {
	const { image, editor } = props;

	const original_ratio = image.width / image.height;
	const designer_ratio = editor.width / editor.height;

	let width = editor.width;
	let height = editor.height;

	if (original_ratio > designer_ratio) {
	    height = width / original_ratio
	} else {
	    width = height * original_ratio
	}

	return { width, height };
}

export function applyFilterToBackground(filter: any /*BaseFilter*/, id: string) {
	const canvas = Canvas.get();
	const background = canvas.backgroundImage;

	if (!background || !(background instanceof fabric.Image)) return;

	if (canvasFilters.hasOwnProperty(id) && Array.isArray(background.filters)) {
		const key = canvasFilters[id];
		background.filters[key] = filter;
	} else {
		background.filters = background.filters || [];
		background.filters.push(filter);
		const key = background.filters.length - 1;
		canvasFilters[id] = key;
	}

	background.applyFilters();
}

//Resetea los valores por defecto para las propiedades del panel TEXT
export function resetValuesByDefault(cv: fabric.Canvas) {
	cv.on('mouse:up', function({ target }) {
		if (target === null || !(target instanceof fabric.Text)) {
			const { setTextPanel } = useTextPanel.getState();
			setTextPanel(defaultTextPanel);
		}
	});
}

export function setDefaultEvents(cv: fabric.Canvas) {
	resetValuesByDefault(cv);
}

export function getBackgroundSize() {
	const canvas = Canvas.get();
	const background = canvas.backgroundImage;

	if (!(background instanceof fabric.Image) || !background.width || !background.height) {
		return { width: 100, height: 100 };
	}

	const { width, height } = background;
	
	return { width, height };
}


export function autoImageScale(bgObject: fabric.Image, rotation: number) {
	detectCollision(bgObject, () => {
		const { scaleX = 0 } = bgObject;
		bgObject.scale(scaleX + 0.014);
	});
}

function detectCollision(bgObject: fabric.Image, cb: (collision: string) => void) {
	const { x, y, width, height } = getCropInfo();

	const bgAbsoluteCoords = bgObject.aCoords;

	if (!bgAbsoluteCoords) return;

	const edges = createEdgesLines(bgAbsoluteCoords);

	const crop = createBox({ x, y, width, height });

	const edgesKeys = Object.keys(edges);

	for (const key of edgesKeys) {
		const edge = edges[key as PositionNames];

		const collision = CollisionSystem.checkCollision(crop, edge);

		if (collision) {
			cb(key);
		}
	}
}

export function getCanvasZoom() {
	const canvas = Canvas.get();
	return canvas.getZoom();
}

export function getControlGrid() {
	const { getMoveable } = TransformInstance;

	const control = getMoveable();

	if (!control) return;

	return control.props.target;	
}

export function getControlContainer() {
	const { getContainer } = TransformInstance;

	return getContainer();
}

export function getCropInfo() {
	const domRect = getControlAbsoluteCoords(); // obtener la información de la posición y tamaño del elemento DOM
	const zoom = getCanvasZoom();

	const controlGrid = getControlGrid();

	if (controlGrid && controlGrid instanceof HTMLElement) {
		const controlRect = controlGrid
			.getBoundingClientRect();	

		const x = domRect.left / zoom;
		const y = domRect.top / zoom;

		const width = controlRect.width / zoom;
		const height = controlRect.height / zoom;

		return { x, y, width, height };
	} else {
		return {
			x: 0,
			y: 0,
			width: 0,
			height: 0,
		}
	}
}

export function getControlAbsoluteCoords() {
	const control = getControlGrid();
	const container = getControlContainer();

	if (control && control instanceof HTMLElement && container) {
		const controlRect = control.getBoundingClientRect();
		const containerRect = container.getBoundingClientRect();

		const domRect = {
			left: Math.abs(controlRect.left - containerRect.left),
			right: Math.abs(controlRect.right - containerRect.right),
			top: Math.abs(controlRect.top - containerRect.top),
			bottom: Math.abs(controlRect.bottom - containerRect.bottom),
		}; // obtener la información de la posición y tamaño del elemento DOM

		return domRect;
	}

	return {
		left: 0,
		right: 0,
		top: 0,
		bottom: 0,
	}

}
