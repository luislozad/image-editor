// @ts-nocheck
import { useCanvasSub } from './canvas';
import { useAdjustSub } from './adjust';
import { useOverlaysSub } from './overlays';
import { useFiltersSub } from './filters';
import { useTextSub } from './text';
import { useTransformSub } from './transform';

export function useSubscribe() {
	const unsubCanvasSub = useCanvasSub();
	const unsubAdjustSub = useAdjustSub();
	const unsubOverlaysSub = useOverlaysSub();
	const unsubFiltersSub = useFiltersSub();
	const unsubTextSub = useTextSub();
	const unsubTransformSub = useTransformSub();

	return () => {
		unsubCanvasSub();
		unsubAdjustSub();
		unsubOverlaysSub();
		unsubFiltersSub();
		unsubTextSub();		
		unsubTransformSub();		
	}
}