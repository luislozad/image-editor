// @ts-nocheck
import React from 'react';
import { calcFillProps, UpdateFillProps } from './types';
import { Shadow } from '@interfaces/canvas';
import { fabric } from 'fabric';
import { rgbaStringToObject, rgbToHex } from '@utils/color';

export function generateGuides() {
	const guides: JSX.Element[] = [];

	const lines = [
		{ top: false, left: false, bottom: true, right: true },
		{ top: false, left: false, bottom: true, right: true },
		{ top: false, left: false, bottom: true, right: false },

		{ top: false, left: false, bottom: true, right: true },
		{ top: false, left: false, bottom: true, right: true },
		{ top: false, left: false, bottom: true, right: false },

		{ top: false, left: false, bottom: false, right: true },
		{ top: false, left: false, bottom: false, right: true },
		{ top: false, left: false, bottom: false, right: false },
	];

	for (const line of lines) {
		const { top, left, bottom, right } = line;

		let borderTop = '';
		let borderLeft = '';
		let borderBottom = '';
		let borderRight = '';

		if (!top) {
			borderTop = '0px solid transparent';
		} else {
			borderTop = '1.5px solid #4af';
		}

		if (!left) {
			borderLeft = '0px solid transparent';
		} else {
			borderLeft = '1.5px solid #4af';
		}

		if (!bottom) {
			borderBottom = '0px solid transparent';
		} else {
			borderBottom = '1.5px solid #4af';
		}

		if (!right) {
			borderRight = '0px solid transparent';
		} else {
			borderRight = '1.5px solid #4af';
		}

		const guide = React.createElement('div', { 
			style: { 
				backgroundColor: 'transparent',
				width: '100%',
				height: '100%',
				borderTop,
				borderLeft,
				borderBottom,
				borderRight,
			} 
		});		

		guides.push(guide);
	}

	return guides;
}

export function calcFill(props: calcFillProps) {
	const { target, left, top, right, bottom } = props;
    const pos = { left: 0, right: 0, top: 0, bottom: 0 };

    const targetCoors = target.getBoundingClientRect();

    const leftCoors = left.getBoundingClientRect();
    const rightCoors = right.getBoundingClientRect();
    const topCoors = top.getBoundingClientRect();
    const bottomCoors = bottom.getBoundingClientRect();

    const calcLeft = (leftCoors.width + (targetCoors.x - leftCoors.x)) - leftCoors.width;
    const calcRight = (rightCoors.width + rightCoors.x) - targetCoors.x - targetCoors.width;
    const calcTop = (topCoors.height + (targetCoors.y - topCoors.y)) - topCoors.height;
    const calcBottom = (bottomCoors.height + bottomCoors.y) - targetCoors.y - targetCoors.height;

    //si es mayor o igual a 0 se devueve lo calculado de lo contrado se devuelve 0
    //esto se debe a que existen resultado negativos que dan como consecuencia comportamientos no esperados
    pos['left'] = calcLeft >= 0 ? calcLeft : 0;
    pos['right'] = calcRight >= 0 ? calcRight : 0;
    pos['top'] = calcTop >= 0 ? calcTop : 0;
    pos['bottom'] = calcBottom >= 0 ? calcBottom : 0;
    
    return pos;
}

export function makeVelocityCalculator(e_init: MouseEvent, callback: (e: MouseEvent, velocity: number) => void) {
    let x = e_init.clientX,
        y = e_init.clientY,
        t = Date.now();
    return function(e) {
        let new_x = e.clientX,
            new_y = e.clientY,
            new_t = Date.now();
        let x_dist = new_x - x,
            y_dist = new_y - y,
            interval = new_t - t;
        let velocity = Math.sqrt(x_dist*x_dist+y_dist*y_dist)/interval;
        callback(e, velocity);
    }
}

export function updateFill(props: UpdateFillProps) {
	const { position, left, top, bottom, right } = props;

	left.style.width = `${position.left}px`;
	left.style.height = `calc(100% - (${position.bottom}px + ${position.top}px))`;
	left.style.top = `${position.top}px`;
	
	right.style.width = `${position.right}px`;
	right.style.height = `calc(100% - (${position.bottom}px + ${position.top}px))`;
	right.style.top = `${position.top}px`;
	right.style.left = `calc(100% - ${position.right}px)`;

	top.style.height = `${position.top}px`;

	bottom.style.height = `${position.bottom}px`;
	bottom.style.top = `calc(100% - ${position.bottom}px)`;
}

export function parseShadow(shadow: string): Shadow {
  const parts = shadow.split(' ');
  const color = parts[0];
  const offsetX = parseInt(parts[1]);
  const offsetY = parseInt(parts[2]);
  const blur = parseInt(parts[3]);
  
  return {
    color: color,
    offsetX: offsetX,
    offsetY: offsetY,
    blur: blur
  };
}

export function getShadow(shadow: fabric.Shadow) {
	const {
		color,
    	blur,
    	offsetX,
    	offsetY
	} = shadow;

	const { r, g, b, a } = rgbaStringToObject(color);
	
	return {
		color: {
			value: rgbToHex(r, g, b),
			opacity: a,
		},
		blur,
		pos: {
			x: offsetX,
			y: offsetY,
		}
	}
}

export function newShadow(shadow: string | undefined) {
	if (!shadow) return undefined;

	const { 
		color, 
		offsetX, 
		offsetY, 
		blur,
	} = parseShadow(shadow);

	return {
		color,
		pos: {
			x: offsetX,
			y: offsetY
		},
		blur,
	};
}

export function convertRangeValue(value: number) {
  // Primero, normalizamos el valor dentro del rango de 0 a 1
  const normalizedValue = (value + 45) / 90;

  // Luego, lo escalamos dentro del rango de 0 a 100
  const scaledValue = normalizedValue * 100;

  // Finalmente, redondeamos el valor para que sea un número entero
  return Math.round(scaledValue);
}

export function calcNewTranslateX(valorActual: number) {
  const rangoMinimo = -45;
  const rangoMaximo = 45;
  const valorMinimo = 191;
  const valorMaximo = -210;

  let valorNormalizado = (valorActual - rangoMinimo) / (rangoMaximo - rangoMinimo);

  if (valorNormalizado < 0) {
    valorNormalizado += 1;
  } else if (valorNormalizado > 1) {
    valorNormalizado -= 1;
  }

  let valorCalculado = valorNormalizado * (valorMaximo - valorMinimo) + valorMinimo;

  return valorCalculado;
}

export function convertCoordToDegress(translateX: number, total: number) {
		let newTotal = total;
		
		if (translateX > 0) {
			const base = 191 / 45;
			newTotal = Math.round(-(translateX / base));
		} else if (translateX < 0) {
			const base = -200 / 45;
			newTotal = Math.round(Math.abs(translateX / base));
		}

		if (newTotal < -45) {
			newTotal = -45;
		} else if (newTotal > 45) {
			newTotal = 45;
		}

		return newTotal;
}