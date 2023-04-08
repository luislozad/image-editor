export interface CalcAspectRatioProps {
	image: {
		width: number;
		height: number;
	};
	editor: {
		width: number;
		height: number;
	}
}

export interface calcFillProps {
	target: HTMLElement;
	left: HTMLElement;
	right: HTMLElement;
	top: HTMLElement;
	bottom: HTMLElement;
}

export interface FontLoadProps {
	fontFamily: string;
	query: string;
}

export interface Position {
	left: number;
	right: number;
	top: number;
	bottom: number;
}

export interface UpdateFillProps {
	position: Position;
	left: HTMLElement;
	right: HTMLElement;
	top: HTMLElement;
	bottom: HTMLElement;
}

export type PositionNames = 'top' | 'bottom' | 'left' | 'right';