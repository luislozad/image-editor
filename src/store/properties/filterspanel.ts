// @ts-nocheck
import { fabric } from 'fabric';
import { create } from 'zustand';
import { subscribeWithSelector } from 'zustand/middleware';
import { SubFilter, Filter } from '@interfaces/filter';

interface FilterData {
	type: Filter;
	subFilter: SubFilter[];
}

export interface FiltersPanel {
	filterData?: FilterData;
	setFilterData: (filterData: FilterData) => void;
}

export const useFiltersPanel = create<FiltersPanel>(subscribeWithSelector((set, get) => ({
	filterData: undefined,
	setFilterData: (filterData: FilterData) => {
		set((state) => ({
			...state,
			filterData,
		}));
	}
})));