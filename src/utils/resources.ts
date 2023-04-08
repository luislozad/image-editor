export function getOverlay(id: string) {
	const path = 'overlays/list';
	switch (id) {
		case 'Golden': {
			return `${path}/overlay_golden.jpg`;
		}
		case 'Light Leak 1': {
			return `${path}/overlay_lightleak1.jpg`;
		}
		case 'Rain': {
			return `${path}/overlay_rain.jpg`;
		}
		case 'Mosaic': {
			return `${path}/overlay_mosaic.jpg`;	
		}
		case 'Vintage': {
			return `${path}/overlay_vintage.jpg`;	
		}
		case 'Paper': {
			return `${path}/overlay_paper.jpg`;	
		}
		case 'Bokeh': {
			return `${path}/overlay_bokeh.jpg`;	
		}
		case 'Hearts': {
			return `${path}/overlay_hearts.jpg`;	
		}
		case 'Light Leak 2': {
			return `${path}/overlay_lightleak2.jpg`;	
		}
		case 'Wood': {
			return `${path}/overlay_wood.jpg`;	
		}
		case 'Chop': {
			return `${path}/overlay_chop.jpg`;	
		}
		case 'Metal': {
			return `${path}/overlay_metal.jpg`;	
		}
		case 'Painting': {
			return `${path}/overlay_painting.jpg`;	
		}
		case 'Grain': {
			return `${path}/overlay_grain.jpg`;
		}
		case 'Clouds': {
			return `${path}/overlay_clouds.jpg`;
		}
		case 'Wall': {
			return `${path}/overlay_wall1.jpg`;
		}
		case 'Wall 2': {
			return `${path}/overlay_wall2.jpg`;
		}
		default: {
			return `${path}/overlay_golden.jpg`;
		}
	}
}