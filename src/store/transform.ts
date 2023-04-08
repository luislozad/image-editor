// @ts-nocheck
import { create } from 'zustand';
import { subscribeWithSelector } from 'zustand/middleware';

interface RangeValue {
	degree: number;
	translateX: number;
}

interface RangeInfo {
	[type: string]: RangeValue;
}

interface TransformSetters {
	setRangeInfo: (rangeInfo: RangeInfo) => void;
}

interface Transform {
	rangeInfo: RangeInfo;
}

type TransformStore = Transform & TransformSetters;

const useTransform = create<TransformStore>(subscribeWithSelector((set, get) => ({
	rangeInfo: {
		rotate: {
			degree: 0,
			translateX: -10,			
		},
		scale: {
			degree: -45,
			translateX: 191,			
		}		
	},
	setRangeInfo: (rangeInfo: RangeInfo) => {
		const { rangeInfo: old } = get();
		set((state) => ({
			...state,
			rangeInfo: {
				...old,
				...rangeInfo
			},
		}));
	}
})));

export { useTransform, TransformStore, RangeValue };