import { FontList } from '@interfaces/font';

export interface GetFontsProps {
	from: number;
	to: number;
	fontDataCache?: FontList;
}

export interface GetFontsResult {
	fontDataCache: FontList;
	fonts: FontList[];
	length: number;
}

export interface GetFontDataProps {
	from: number;
	to: number;
}