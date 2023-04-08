// @ts-nocheck
import WebFont from 'webfontloader';
import { FontLoadProps } from './types';
import { FONT_DATA } from '@const/fonts';
import FlexSearch from 'flexsearch';
import { Variant } from '@interfaces/font';
import { useTextPanelCache, FontCacheVariant } from '@store/cache'

export const fontSearch = (() => {
	const index = new FlexSearch({
		charset: 'latin:advanced',
		tokenize: 'reverse',
		cache: true
	});

	for (const key in FONT_DATA) {
		const { family } = FONT_DATA[key];
		index.add(key, family);
	}

	return index;
})();

export async function fontLoad(props: FontLoadProps) {
	const { fontFamily, query } = props;

	return new Promise((resolve, reject) => {
		WebFont.load({
			google: {
			  families: [`${fontFamily}:${query}`]
			},
			fontactive: function(familyName) {
				resolve({ loaded: true, familyName });
			},
			fontinactive: function(familyName) {
				reject({ loaded: false, familyName });
			}
		});
	})
}

//Optine la variante mas adecuada que sea mayor o igual a 400
export function getFontVariant(variants: Variant[]) {
	const index = variants.findIndex(({ weight }) => weight >= 400);

	if (index > -1) {
		return variants[index];
	} else if (variants.length > 1) {
		return variants[variants.length - 2];
	}

	return variants[variants.length - 1];
}

export async function fechFontDefault() {
	const { family, id, variants, category } = FONT_DATA['open-sans'];
	const { setFonts, setFontVariants } = useTextPanelCache.getState();

	const loadedVariants: FontCacheVariant = {
		[id]: {
			list: [],
		}
	};

	const variantList = loadedVariants[id].list;

	for (const variant of variants) {
		try {
			await fontLoad({
				fontFamily: family,
				query: variant.query,
			});

			variantList.push({
				id: variant.name,
				error: false,
			});
		} catch (e) {
			variantList.push({
				id: variant.name,
				error: true,
			});
		}
	}

	if (variantList.length > 0) {
		setFonts({
			[id]: {
				id,
				error: false,
			}
		});
		setFontVariants(loadedVariants);
	}
}

export function getFontID(fontFamily: string) {
	return fontFamily
		.toLowerCase()
		.split(' ')
		.join('-');
}