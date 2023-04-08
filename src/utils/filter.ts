export function getFilterID(name: string) {
	switch (name) {
		case 'Desert': {
			return 'desert';
		}
		case 'Peach': {
			return 'redwine';
		}
		case 'Clash': {
			return 'frog';
		}
		case 'Plum': {
			return 'bloom';
		}
		case 'Breezy': {
			return 'sunset';
		}
		case 'Deep Blue': {
			return 'lavandula';
		}
		case 'Frog': {
			return 'frozen';
		}
		case 'Sunset': {
			return 'dusk';
		}
		default: {
			return 'desert';
		}
	}
}