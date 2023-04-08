export interface Css {
    fontWeight: string;
    fontStyle: string;
}

export interface Variant {
    style: string;
    weight: string;
    query: string;
    name: string;
    css: Css;
}

export interface FontData {
    family: string;
    id: string;
    variants: Variant[];
    category: string;
}

export interface FontList {
	[fontID: string]: FontData;
}

export type TextDecoration = 'none' | 'overline' | 'underline' | 'linethrough';