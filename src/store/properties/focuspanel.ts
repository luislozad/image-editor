// @ts-nocheck
import { create } from 'zustand';
import { subscribeWithSelector } from 'zustand/middleware';

type FocusType = 'radial' | 'mirrored' | 'linear' | 'guassian';

interface FocusPanel {
	focustype?: FocusType;
	setFocusType: (focustype: FocusType) => void;
}

const useFocusPanel = create<FocusPanel>(subscribeWithSelector((set, get) => ({
	focustype: undefined,
	setFocusType: (focustype: FocusType) => {
		set((state) => ({
			...state,
			focustype,
		}));
	} 
})));

export { useFocusPanel, FocusPanel };