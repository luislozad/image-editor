// @ts-nocheck
import { useTextPanel, useTextControl, Font, TextAlign } from '@store/properties';
import { useTextPanelCache } from '@store/canvas';
import { Canvas } from '@const/canvas';
import { FONT_DATA } from '@const/fonts';
import { getFontID, getFontVariant } from '@utils/font';
import { newShadow } from '@utils/transform';
import { rgbaArrayToString, hexToRGBA } from '@utils/color';
import { Shadow } from '@interfaces/effect';
import { TextDecoration } from '@interfaces/font';
import { getTextState, setTextPropertySafe, updateTextState, setTextDecoration } from '@utils/text';
import { fabric } from 'fabric';

function createText(id: string) {
	const canvas = Canvas.get();
	const { content, ...options } = useTextPanel.getState();

	if (content === '') return;

	const text = new fabric.IText(content);

	updateTextState({ content, ...options }, text);

	text.set('id', id);

	canvas.add(text).setActiveObject(text);

	text.selectable = true;
	text.centerH();
	text.centerV();
	text.setCoords();

	text.on('selected', (data) => {
		const { target } = data;
		const { setTextPanel } = useTextPanel.getState();
		
		const textState = getTextState(target);

		setTextPanel(textState);
	});

	text.on('changed', function(e) {
		const { text } = this;
		const { setContent } = useTextPanel.getState();
		setContent(text);
	});
	
	// text.on('scaling', (data) => {
	// 	const { transform } = data;

	// });

	canvas.renderAll();
}

function useID() {
	return useTextControl
			.subscribe((state) => state.id, (id) => createText(id));
}

function updateContent(content: string) {
	const canvas = Canvas.get();
	setTextPropertySafe('text', content);
	canvas.renderAll();
}

function updateAlignment(alignment: TextAlign) {
	const canvas = Canvas.get();
	setTextPropertySafe('textAlign', alignment);
	canvas.renderAll();
}

function updateFont(font: Font) {
	const canvas = Canvas.get();
	setTextPropertySafe('fontFamily', font.family);
	canvas.renderAll();
}

function updateWeight(weightList: FontVariant[]) {
	const canvas = Canvas.get();
	const { style, weight } = weightList.find((variant) => variant.selected);

	setTextPropertySafe('fontWeight', Number(weight));
	setTextPropertySafe('fontStyle', style);	
	canvas.renderAll();
}

function updateColor(color: { value: string, opacity: number }) {
	const canvas = Canvas.get();
	setTextPropertySafe('fill', color.value)
	setTextPropertySafe('opacity', color.opacity)
	canvas.renderAll();
}

function updateSize(size: number) {
	const canvas = Canvas.get();
	setTextPropertySafe('fontSize', size);
	canvas.renderAll();
}

function updateLetter(letter: number) {
	const canvas = Canvas.get();
	setTextPropertySafe('charSpacing', letter);
	canvas.renderAll();
}

function updateLine(line: number) {
	const canvas = Canvas.get();
	setTextPropertySafe('lineHeight', line);
	canvas.renderAll();
}

function updateShadow(shadow: Shadow) {
	const canvas = Canvas.get();

	const rgbaArr = hexToRGBA(shadow.color.value, shadow.color.opacity);

	const newShadow = new fabric.Shadow({
		color: rgbaArrayToString(rgbaArr),
		blur: shadow.blur,
		offsetX: shadow.pos.x,
		offsetY: shadow.pos.y
	});

	setTextPropertySafe('shadow', newShadow);

	canvas.renderAll();
}

function updateDecoration(decoration: TextDecoration) {
	const canvas = Canvas.get();

	setTextDecoration(decoration);

	canvas.renderAll();
}

function useDecoration() {
	return useTextPanel
		.subscribe((state) => state.decoration, updateDecoration);
}

function useShadow() {
	return useTextPanel
			.subscribe((state) => state.shadow, (shadow) => {
				if (shadow) {
					updateShadow(shadow);
				}
			});
}

function useLine() {
	return useTextPanel
			.subscribe((state) => state.line, updateLine);
}

function useLetter() {
	return useTextPanel
			.subscribe((state) => state.letter, updateLetter);
}

function useSize() {
	return useTextPanel
			.subscribe((state) => state.size, updateSize);
}

function useContent() {
	return useTextPanel
			.subscribe((state) => state.content, updateContent);
}

function useAlignment() {
	return useTextPanel
			.subscribe((state) => state.alignment, updateAlignment);
}

function useFont() {
	return useTextPanel
			.subscribe((state) => state.font, updateFont);
}

function useWeight() {
	return useTextPanel
			.subscribe((state) => state.weight, updateWeight);
}

function useColor() {
	return useTextPanel
			.subscribe((state) => state.color, updateColor);
}

export function useTextSub() {
	const unsubID = useID();
	const unsubContent = useContent();
	const unsubAlignment = useAlignment();
	const unsubFont = useFont();
	const unsubWeight = useWeight();
	const unsubColor = useColor();
	const unsubSize = useSize();
	const unsubLetter = useLetter();
	const unsubLine = useLine();
	const unsubShadow = useShadow();
	const unsubDecoration = useDecoration();

	return () => {
		unsubID();
		unsubContent();
		unsubAlignment();
		unsubFont();
		unsubWeight();
		unsubColor();		
		unsubSize();		
		unsubLetter();		
		unsubLine();		
		unsubShadow();		
		unsubDecoration();		
	}
}