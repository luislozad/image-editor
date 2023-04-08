// @ts-nocheck
import { fabric } from 'fabric';
import { SubFilter } from '@interfaces/filer';

export interface FilterPreset {
	[name: string]: SubFilter[];
}

export interface FilterApplied {
	[id: string]: number;
}

export interface FilterCollection {
	[category: string]: FilterPreset;
}