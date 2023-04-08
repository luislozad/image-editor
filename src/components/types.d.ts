// @ts-nocheck
import { Variant } from '@interfaces/font';

export type Category = 'library' | 'transform' | 'filters' | 'adjust' | 'focus' | 'frames' | 'overlays' | 'text' | 'textDesign' | 'stickers' | 'brush';

export interface FillControl {
	left: number;
	right: number;
	top: number;
	bottom: number;
}

export interface Font {
	id: string;
	loadedVariant?: Variant;
}

type ID = string;

type ValueMatch = string;

export interface SearchResult {
	result: ID[];
	match: ValueMatch;
}