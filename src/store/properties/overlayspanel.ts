// @ts-nocheck
import { create } from 'zustand';
import { subscribeWithSelector } from 'zustand/middleware';

interface OverlaysPanel {
	recurce?: string;
	setRecurce: (recurce: string) => void;
}

const useOverlayspanel = create<OverlaysPanel>(subscribeWithSelector((set, get) => ({
	recurce: undefined,
	setRecurce: (recurce: string) => {
		set((state) => ({
			...state,
			recurce,
		}));
	}
})));

export { useOverlayspanel, OverlaysPanel };