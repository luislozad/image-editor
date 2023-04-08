// @ts-nocheck
import { fabric } from 'fabric';
import { useFiltersPanel } from '@store/properties';
import { SubFilter } from '@interfaces/filer';
import { Canvas } from '@const/canvas';
import { applyFilterToBackground } from '@utils/canvas';

function updateFilterCustom(filters: SubFilter[]) {
	const canvas = Canvas.get();

	const subFilters = filters.map(({ name, config }) => {
		return new fabric.Image.filters[name](config);
	});

	const filterCustom = new fabric.Image.filters.Composed({
		subFilters,
	});

	applyFilterToBackground(filterCustom, 'filterCustom');

	canvas.requestRenderAll();
}

function useFilterCustom() {
	return useFiltersPanel
			.subscribe((state) => state.filterData, ({ subFilter }) => updateFilterCustom(subFilter));
}

export function useFiltersSub() {
	const unsubFiltersPanel = useFilterCustom();

	return () => {
		unsubFiltersPanel();
	}
}