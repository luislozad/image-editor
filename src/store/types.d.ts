import { FontData } from '@interfaces/font';

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