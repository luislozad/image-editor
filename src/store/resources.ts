// @ts-nocheck
import { create } from 'zustand';
import { subscribeWithSelector } from 'zustand/middleware';
import { FontResource } from './types';

interface Resources {
	fonts?: FontResource;
}

const useResources = create<Resources>(subscribeWithSelector((set, get) => ({
	fonts: undefined,
	setFonts: (font: FontResource) => {
		const { fonts = {} } = get();
		set((state) => ({
			...state,
			fonts: {
				...fonts,
				...font
			}
		}))
	}
})));

export { useResources, Resources };