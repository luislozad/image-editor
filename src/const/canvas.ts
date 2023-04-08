// @ts-nocheck
import { fabric } from 'fabric';
import { FilterApplied } from './type';
import { setDefaultEvents } from '@utils/canvas';
import { System } from 'detect-collisions';

export const Canvas = (() => {
	let editor: fabric.Canvas;

	// fabric.textureSize = 20000;
	// @ts-ignore
	fabric.filterBackend = fabric.initFilterBackend();
	// fabric.filterBackend = new fabric.WebglFilterBackend();


	return {
		init: (container: HTMLCanvasElement, force?: boolean) => {
			if (!editor || force) {
				editor = new fabric.Canvas(container);
				setDefaultEvents(editor);
			}
		},
		set: (canvas: fabric.Canvas) => {
			editor = canvas;
		},
		get: () => {
			return editor;
		}
	}
})();

export const canvasFilters: FilterApplied = {};

export const CollisionSystem = new System();