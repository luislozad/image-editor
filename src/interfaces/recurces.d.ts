import { fabric } from 'fabric';

export interface Image {
    large: string;
    thumbnail: string;
}

export interface Library {
    name: string;
    thumbnail: string;
    images: Image[];
}

export interface FilterType {
    name: string;
    thumbnail: string;
}

export interface Filter {
    name: string;
    thumbnail: string;
    list: FilterType[];
}

export interface FontResource {
    [id: string]: FontData | null;
}

export interface Box {
    x: number;
    y: number;
    width: number;
    height: number;
}

export interface BoxCoords {
    bl: fabric.Point;
    br: fabric.Point;
    tl: fabric.Point;
    tr: fabric.Point;
    width?: number;
    height?: number;
}