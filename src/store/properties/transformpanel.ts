import { create } from 'zustand';
import { subscribeWithSelector } from 'zustand/middleware';

export interface TransformSize {
	width: number;
	height: number;
}

interface TransformPanelSetters {
	setSize: (size: TransformSize) => void;
	setType: (type: string) => void;
}

export interface TransformPanel {
	size: TransformSize;
	type: string;
}

type TransformPanelStore = TransformPanel & TransformPanelSetters;

export const useTransformPanel = create(subscribeWithSelector<TransformPanelStore>((set, get) => ({
	size: {
		width: 0,
		height: 0,
	},
	type: 'custom',
	setSize: (size: TransformSize) => {
		set((state) => ({
			...state,
			size,
		}));
	},
	setType: (type: string) => {
		set((state) => ({
			...state,
			type,
		}));
	}
})));