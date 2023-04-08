// @ts-nocheck
import { FONT_API, FONT_DATA } from '@const/fonts';
import { FontList } from '@interfaces/font';
import { GetFontsProps, GetFontsResult, GetFontDataProps } from './types';

export function fontContact(fontDataCache: FontList, keys: string[]) {
	const newFonts = keys.map((name) => ({ [name]: fontDataCache[name] }));

	return newFonts as FontList[];
}

export async function getFonts(props: GetFontsProps): Promise<GetFontsResult | null> {
	const { from, to, fontDataCache } = props;

	if (fontDataCache) {
		const keys = Object.keys(fontDataCache);
		const part = keys.slice(from, to);
		const fonts = fontContact(fontDataCache, part);

		return Promise.resolve({
			fontDataCache,
			length: keys.length,
			fonts,
		});
	}

	try {
		const res = await fetch(FONT_API);
		const fontMap = await res.json() as FontList;
		const keys = Object.keys(fontMap);
		const part = keys.slice(from, to);
		const fonts = fontContact(fontMap, part);

		return {
			fontDataCache: fontMap,
			length: keys.length,
			fonts,
		};

	} catch(_err) {
		return Promise.resolve(null);
	}
}

export function getFontData(props: GetFontDataProps): GetFontsResult {
	const { from, to } = props;

	const fontList = FONT_DATA as FontList;
	const keys = Object.keys(fontList);
	const part = keys.slice(from, to);
	const fonts = fontContact(fontList, part);

	return {
		fontDataCache: fontList,
		length: keys.length,
		fonts,
	};
}

export function getFontFrom(ids: string[]): FontList[] {
	const fontMap = FONT_DATA as FontList;
	const fonts = fontContact(fontMap, ids);

	return fonts
}