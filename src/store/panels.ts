// @ts-nocheck
import { MutableRefObject } from 'react';
import { create } from 'zustand';
import { subscribeWithSelector } from 'zustand/middleware';

interface Panel {
	viewportLeft: MutableRefObject<HTMLElement> | null;
	setViewportLeft: (viewportLeft: MutableRefObject<HTMLElement>) => void;
	removeViewportLeft: () => void;
}

const usePanel = create<Panel>(subscribeWithSelector((set, get) => ({
	viewportLeft: null,
	setViewportLeft: (viewportLeft: MutableRefObject<HTMLElement>) => {
		set((state) => ({
			...state,
			viewportLeft,
		}))
	},
	removeViewportLeft: () => {
		set((state) => ({
			...state,
			viewportLeft: null,
		}));
	}
})));

export { usePanel, Panel };