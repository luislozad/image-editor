// @ts-nocheck
import { fabric } from 'fabric';
import { create } from 'zustand';
import { subscribeWithSelector } from 'zustand/middleware';
import { fechFontDefault } from '@utils/font';
import Moveable from 'react-moveable';

interface CanvasSetters {
	setBackgound: (url: string) => void;
	setTransformControl: (value: boolean) => void;
	setBackgroundRotation: (rotation: number) => void;
	setTransformInstance: (transformInstance: Moveable | null) => void;
}

interface CanvasGetters {
	fetchCanvasData: () => Promise<void>;	
}

interface Canvas {
	bg: string;
	transformControl: boolean;
	backgroundRotation: number;
}

type CanvasStore = Canvas & CanvasGetters & CanvasSetters;

const useCanvas = create<CanvasStore>(subscribeWithSelector((set, get) => ({
	bg: '',
	transformInstance: null,
	backgroundRotation: 0,
	fetchCanvasData: async () => {
		await fechFontDefault();
		// const url = 'https://img.ly/static/libraries/unsplash/raw/a2CcC2HfcEf.png';
		const url = 'categories/images/pattern/download_24.jpeg';
		// const url = 'categories/images/0001.png';

		set((state) => ({
			...state,
			bg: url,
		}));
	},
	setBackgound: (url) => set((state) => ({
		...state,
		bg: url
	})),
	setTransformControl: (value: boolean) => {
		set((state) => ({
			...state,
			transformControl: value,
		}))
	},
	setBackgroundRotation: (rotation: Rotation) => {
		set((state) => ({
			...state,
			backgroundRotation: rotation,
		}));
	},
})));


export { useCanvas, Canvas };
