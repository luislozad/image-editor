// @ts-nocheck
import { fabric } from 'fabric';
import { FONT_DATA } from '@const/fonts';
import { getFontID } from '@utils/font';
import { getShadow } from '@utils/transform';
import { TextPanel } from '@store/properties';
import { Canvas } from '@const/canvas';
import { rgbaStringToObject, rgbToHex, hexToRGBA, rgbaArrayToString } from '@utils/color';
import { TextDecoration } from '@interfaces/font';

type TextState = TextPanel;

export function getTextState(object: fabric.Text): TextState {
	const { 
		fill: color, 
		fontFamily,
		fontStyle,
		fontWeight, 
		fontSize,
		textAlign,
		text,
		opacity,
		shadow,
		scaleX,
		scaleY,
		lockUniScaling,
		charSpacing,
		lineHeight,
	} = object;

	const textDecoration = getTextDecorationState(object);

	const fontID = getFontID(fontFamily);
	const fontData = FONT_DATA[fontID];

	const newWeight = fontData
		.variants
		.map((variant) => {
			variant.selected = false;
			if (variant.style === fontStyle && variant.weight == fontWeight) {
				variant.selected = true;
			}

			return variant;
		});

	return {
		content: text,
		alignment: textAlign,
		font: {
			id: fontID,
			family: fontFamily,
			category: fontData.category,
		},
		weight: newWeight,
		color: {
			value: color,
			opacity
		},
		shadow: shadow ? getShadow(shadow) : undefined,
		scale: {
			x: scaleX,
			y: scaleY,
			lock: lockUniScaling,
		},
		size: fontSize,
		letter: charSpacing,
		line: lineHeight,
		decoration: textDecoration,
	};
}

export function updateTextState(state: TextState, target: fabric.Text) {
	const {
		content,
		alignment,
		font,
		weight,
		color,
		shadow,
		scale,
		size,
		letter,
		line,
		decoration,
	} = state;

	const fontVariant = weight.find((variant) => variant.selected);

	target.set('text', content);

	target.set('lineHeight', line);

	target.set('charSpacing', letter);

	target.set('fill', color.value);
	target.set('opacity', color.opacity);

	target.set('fontFamily', font.family);
	target.set('fontStyle', fontVariant.style);
	target.set('fontWeight', Number(fontVariant.weight));
	target.set('fontSize', size);

	target.set('textAlign', alignment);

	if (decoration) {
		setTextDecorationTo(target, decoration);
	}

	if (shadow) {
		const rgbaArr = hexToRGBA(shadow.color.value, shadow.color.opacity);

		target.set('shadow', new fabric.Shadow({
			color: rgbaArrayToString(rgbaArr),
			blur: shadow.blur,
			offsetX: shadow.pos.x,
			offsetY: shadow.pos.y
		}));
	} else {
		target.set('shadow', null);
	}

	if (scale) {
		target.set('scaleX', scale.x);
		target.set('scaleY', scale.y);
		target.set('lockUniScaling', scale.lock);
	} else {
		target.set('scaleX', 1);
		target.set('scaleY', 1);
		target.set('lockUniScaling', false);
	}
}

export function setTextPropertySafe(property: string, data: any) {
	const canvas = Canvas.get();
	const object = canvas.getActiveObject();

	if (object && object instanceof fabric.Text) {
		object.set(property, data);
	}	
}

export function getActiveText() {
	const canvas = Canvas.get();
	const object = canvas.getActiveObject();

	if (!object && !(object instanceof fabric.Text)) {
		return;
	}

	return object;
}

export function getShadowState(object: fabric.Text) {
	if (!object.shadow) return null;

	const { color, blur, offsetX, offsetY } = object.shadow;
	const { r, g, b, a: opacity } = rgbaStringToObject(color);
	return {
		color: {
			value: rgbToHex(r, g, b),
			opacity,
		},
		blur,
		pos: {
			x: offsetX,
			y: offsetY,
		}
	};
}

export function getTextDecorationState(object: fabric.Text) {
	const { linethrough, overline, underline } = object;

	if (linethrough) {
		return 'linethrough';
	} else if (overline) {
		return 'overline';
	} else if (underline) {
		return 'underline';
	} else {
		return 'none';
	}
}

export function setTextDecoration(decoration: TextDecoration) {
	const styles = ['linethrough', 'overline', 'underline'];

	for (const style of styles) {
		if (style === decoration && decoration !== 'none') {
			setTextPropertySafe(style, true);
		} else {
			setTextPropertySafe(style, false);
		}
	}
}

export function setTextDecorationTo(object: fabric.Text, decoration: TextDecoration) {
	const styles = ['linethrough', 'overline', 'underline'];

	for (const style of styles) {
		if (style === decoration && decoration !== 'none') {
			object.set(style, true);
		} else {
			object.set(style, false);
		}
	}
}