// @ts-nocheck
import { create } from 'zustand';
import { subscribeWithSelector } from 'zustand/middleware';

interface FontLoad {
	id: string;
	error?: boolean;
}

interface FontCache {
	[fontID: string]: FontLoad;
}

interface FontCacheVariant {
	[fontID: string]: {
		list: FontLoad[];
	}
}

interface TextPanelCache {
	fonts?: FontCache;
	fontVariants?: FontCacheVariant;
	setFonts: (font: FontCache) => void;
	setFontVariants: (variants: FontCacheVariant) => void;
}

const useTextPanelCache = create<TextPanelCache>(subscribeWithSelector((set, get) => ({
	setFonts: (font: FontCache) => {
		const { fonts = {} } = get();
		set((state) => ({
			...state,
			fonts: {
				...fonts,
				...font
			},
		}))
	},
	setFontVariants: (variants: FontCacheVariant) => {
		const { fontVariants = {} } = get();
		set((state) => ({
			...state,
			fontVariants: {
				...fontVariants,
				...variants
			}
		}))
	}
})));

export { useTextPanelCache, TextPanelCache, FontCacheVariant };