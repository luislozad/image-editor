import { fabric } from 'fabric';
import { BoxCoords, Box as IBox } from '@interfaces/recurces';
import { Box, Line } from 'detect-collisions';

// La principal funcion de esta funcion, es crear aristas alrededor de la caja,
// al posicionarlas alrededor del objeto podemos con ayuda de otras funciones detectar si una de ellas
// esta chocando con algun objetivo
export function createEdgesHelper(box: BoxCoords) {
	const { bl, br, tl, tr } = box;

	const edgeTop = new fabric.Line([ tl.x, tl.y, tr.x, tr.y ]);
	const edgeBottom = new fabric.Line([ bl.x, bl.y, br.x, br.y ]);
	const edgeLeft = new fabric.Line([ tl.x, tl.y, bl.x, bl.y ]);
	const edgeRight = new fabric.Line([ tr.x, tr.y, br.x, br.y ]);

	return {
		top: edgeTop,
		bottom: edgeBottom,
		left: edgeLeft,
		right: edgeRight,
	}
}

export function calcPointSAT(box: { x1: number, y1: number, x2: number, y2: number }) {
	const { x1, y1, x2, y2 } = box;

	const posX = x1;
	const posY = y1;

	// Crear la línea con la posición calculada

	const start = new SAT.Vector(0, 0);
	const end = new SAT.Vector(x2 + x1, y2 + y1);
	const line = new SAT.Polygon(new SAT.Vector(posX, posY), [ start, end ]);

	return line;
}

export function createPolygonEdgeBox(box: BoxCoords) {
	const { bl, br, tl, tr } = box;

	const edgeTop = calcPointSAT({ x1: tl.x, y1: tl.y, x2: tr.x, y2: tr.y });
	const edgeBottom = calcPointSAT({ x1: bl.x, y1: bl.y, x2: br.x, y2: br.y });
	const edgeLeft = calcPointSAT({ x1: tl.x, y1: tl.y, x2: bl.x, y2: bl.y });
	const edgeRight = calcPointSAT({ x1: tr.x, y1: tr.y, x2: br.x, y2: br.y });

	return {
		top: edgeTop,
		bottom: edgeBottom,
		left: edgeLeft,
		right: edgeRight,
	}
}

export function createPolygonBox(box: IBox) {
	const { x, y, width, height } = box;

	const V = SAT.Vector;
	const B = SAT.Box;

	const polygonBox = new B(new V(x,y), width, height).toPolygon();

	return polygonBox;
}

export function createEdgesLines(box: BoxCoords) {
	const { bl, br, tl, tr } = box;

	const lineTop = new Line({ x: tl.x, y: tl.y }, { x: tr.x, y: tr.y });
	const lineBottom = new Line({ x: bl.x, y: bl.y }, { x: br.x, y: br.y });
	const lineLeft = new Line({ x: tl.x, y: tl.y }, { x: bl.x, y: bl.y });
	const lineRight = new Line({ x: tr.x, y: tr.y }, { x: br.x, y: br.y });

	return {
		top: lineTop,
		bottom: lineBottom,
		left: lineLeft,
		right: lineRight,
	}
}

export function createBox(box: IBox) {
	const { x, y, width, height } = box;

	const newBox = new Box({ x, y }, width, height);

	return newBox;
}