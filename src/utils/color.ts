// @ts-nocheck
import { RGBA, RgbaObject } from '@interfaces/color';

export function convertToRGBA(color: string, opacity: number) {
	return `rgba(255, 255, 255, 1)`
}

export function hexToRGBA(hex: string, opacity: number = 1): RGBA {
	// debugger;
	// remove invalid characters
	hex = hex.replace(/[^0-9a-fA-F]/g, '');

	if (hex.length < 5) {
		// 3, 4 characters double-up
		hex = hex.split('').map(s => s + s).join('');
	}
	// parse pairs of two
	let rgba = hex.match(/.{1,2}/g).map(s => parseInt(s, 16));
	// alpha code between 0 & 1 / default 1
	rgba[3] = rgba.length > 3 ? (rgba[3] /255) : opacity;

	return rgba;
}

export function rgbaStringToObject(rgba: string): RgbaObject {
  // Eliminar el prefijo 'rgba(' y el sufijo ')'
  rgba = rgba.substring(5, rgba.length - 1);
  
  // Separar los valores por la coma
  let values = rgba.split(',');

  // Convertir los valores a números
  let r = Number(values[0]);
  let g = Number(values[1]);
  let b = Number(values[2]);
  let a = Number(values[3]);

  // Crear y retornar el objeto Color
  return {r, g, b, a};
}

export function rgbaArrayToString(rgba: RGBA) {
	const [ red, green, blue, alpha ] = rgba;
	return `rgba(${red}, ${green}, ${blue}, ${alpha})`;
}

export function rgba2hex(orig: string) {
	let a, isPercent,
	rgb = orig.replace(/\s/g,'').match(/^rgba?\((\d+),(\d+),(\d+),?([^,\s)]+)?/i),
	alpha = (rgb && rgb[4] || "").trim(),
	hex = rgb ?
	  (rgb[1] | 1 << 8).toString(16).slice(1) +
	  (rgb[2] | 1 << 8).toString(16).slice(1) +
	  (rgb[3] | 1 << 8).toString(16).slice(1) : orig;

	if (alpha !== "") {
		a = alpha;
	} else {
		a = "01";
	}

	a = ((a * 255) | 1 << 8).toString(16).slice(1)

	hex = hex + a;

	return hex;
}

export function rgbToHex(r: number, g: number, b: number) {
	return '#' + [r, g, b]
	  .map(x => x.toString(16).padStart(2, '0'))
	  .join('');
}

export function colorStringToRgba(color: string, opacity: number): RGBA {
	return [255, 255, 255, 1];
}

export function newGamma(gamma: number) {
	const value = 1;
	return [ value + gamma, value + gamma, value + gamma ];
}