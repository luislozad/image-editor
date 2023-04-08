import { create } from 'zustand';
import { subscribeWithSelector } from 'zustand/middleware';

interface BasicSetters {
	setBrigtness: (value: number) => void;
	setContrast: (value: number) => void;
	setSaturation: (value: number) => void;
	setGamma: (value: number) => void;
}


interface Basic {
	brigtness: number;
	contrast: number;
	saturation: number;
	gamma: number;
}

type BasicStore = Basic & BasicSetters; 

interface RefinementsSetters {
	setShadows: (value: number) => void;
	setHighlights: (value: number) => void;
	setExposure: (value: number) => void;
	setBlacks: (value: number) => void;
	setWhites: (value: number) => void;
	setTemperature: (value: number) => void;
	setSharpness: (value: number) => void;
	setClarity: (value: number) => void;
}

export interface Refinements {
	clarity: number;
	shadows: number;
	highlights: number;
	exposure: number;
	blacks: number;
	whites: number;
	temperature: number;
	sharpness: number;
}

export type RefinementsStore = Refinements & RefinementsSetters;

export interface AjustPanel {
	basic: Basic;
	refinements: Refinements;
	setBasic: (basic: Basic) => void;
	setRefinements: (refinements: Refinements) => void;
}

export const useBasic = create(subscribeWithSelector<BasicStore>((set, get) => ({
	brigtness: 0,
	contrast: 0,
	saturation: 0,
	gamma: 0,
	setBrigtness: (value: number) => {
		set((state) => ({
			...state,
			brigtness: value,
		}));
	},
	setContrast: (value: number) => {
		set((state) => ({
			...state,
			contrast: value,
		}));
	},
	setSaturation: (value: number) => {
		set((state) => ({
			...state,
			saturation: value,
		}));
	},
	setGamma: (value: number) => {
		set((state) => ({
			...state,
			gamma: value,
		}));
	},
})));

export const useRefinements = create(subscribeWithSelector<RefinementsStore>((set, get) => ({
	clarity: 0,
	shadows: 0,
	highlights: 0,
	exposure: 0,
	blacks: 0,
	whites: 0,
	temperature: 0,
	sharpness: 0,
	setClarity: (value: number) => {
		set((state) => ({
			...state,
			clarity: value,
		}))
	},
	setShadows: (value: number) => {
		set((state) => ({
			...state,
			shadows: value,
		}))
	},
	setHighlights: (value: number) => {
		set((state) => ({
			...state,
			highlights: value,
		}))
	},
	setExposure: (value: number) => {
		set((state) => ({
			...state,
			exposure: value,
		}))
	},
	setBlacks: (value: number) => {
		set((state) => ({
			...state,
			blacks: value,
		}))
	},
	setWhites: (value: number) => {
		set((state) => ({
			...state,
			whites: value,
		}))
	},
	setTemperature: (value: number) => {
		set((state) => ({
			...state,
			temperature: value,
		}))
	},
	setSharpness: (value: number) => {
		set((state) => ({
			...state,
			sharpness: value,
		}))
	},
})));

export const useAjustPanel = create(subscribeWithSelector<AjustPanel>((set, get) => ({
	basic: {
		brigtness: 0,
		contrast: 0,
		saturation: 0,
		gamma: 0,		
	},
	refinements: {
		clarity: 0,
		shadows: 0,
		highlights: 0,
		exposure: 0,
		blacks: 0,
		whites: 0,
		temperature: 0,
		sharpness: 0,
	},
	setBasic: (basic: Basic) => {
		set((state) => ({
			...state,
			basic,
		}));
	},
	setRefinements: (refinements: Refinements) => {
		set((state) => ({
			...state,
			refinements,
		}));
	}
})));