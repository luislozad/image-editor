import Moveable from 'react-moveable';

export const TransformInstance = (() => {
	let moveable: Moveable | null = null;
	let container: HTMLElement | null = null;

	return {
		setMoveable: (_moveable: Moveable | null) => {
			moveable = _moveable;
		},
		setContainer: (_container: HTMLElement | null) => {
			container = _container;
		},
		getMoveable: () => {
			return moveable;
		},
		getContainer: () => {
			return container;
		},
		get: () => ({ moveable, container })
	}
})()