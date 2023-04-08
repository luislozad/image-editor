// @ts-nocheck
import { create } from 'zustand';
import { subscribeWithSelector } from 'zustand/middleware';

interface FramesPanel {
	recurce?: string;
	setRecurce: (recurce: string) => void;
}

const useFramesPanel = create<FramesPanel>(subscribeWithSelector((set, get) => ({
	recurce: undefined,
	setRecurce: (recurce: string) => {
		set((state) => ({
			...state,
			recurce,
		}));
	}
})));

export { useFramesPanel, FramesPanel };