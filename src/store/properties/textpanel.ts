import { create } from 'zustand';
import { subscribeWithSelector } from 'zustand/middleware';
import { Variant, FontData, TextDecoration } from '@interfaces/font';
import { Shadow } from '@interfaces/effect';
import { Color } from '@interfaces/color';
import { Scale } from '@interfaces/canvas';

type FontScale = Scale;

export type TextAlign = 'left' | 'center' | 'right';

export interface Font extends Omit<FontData, 'variants'> {}

export interface FontVariant extends Variant {
  selected?: boolean;
}

interface TextPanelSetters {
  setShadow: (shadow: Shadow) => void;
  setContent: (content: string) => void;
  setAlignment: (alignment: TextAlign) => void;
  setFont: (font: Font) => void;
  setColor: (color: Color) => void;
  setScale: (scale: FontScale) => void;
  setFontSize: (size: number) => void;
  setTextPanel: (data: TextPanel) => void;
  setFontLetter: (letter: number) => void;
  setFontLine: (line: number) => void;
  setTextDecoration: (decoration: TextDecoration) => void;
}

export interface TextPanel {
	content: string;
	alignment: TextAlign;
	font: Font;
	weight: FontVariant[];
  color: Color;
  shadow?: Shadow;
  scale?: FontScale;
  size: number;
  letter: number;
  line: number;
  decoration?: TextDecoration;
}

type TextPanelStore = TextPanel & TextPanelSetters;

interface TextControl {
  id?: string;
  setID: (id: string) => void;
}

export const useTextControl = create(subscribeWithSelector<TextControl>((set, get) => ({
  id: undefined,
  setID: (id: string) => {
    set((state) => ({
      ...state,
      id,
    }));
  }
})));

export const defaultTextPanel: TextPanel = {
  content: '',
  alignment: 'left',
  size: 64,
  scale: {
    x: 1,
    y: 1,
    lock: false,
  },
  font: {
    id: 'open-sans',
    family: 'Open Sans',
    category: 'sans-serif',
  },
  weight: [
        {
          style: 'italic',
          weight: '300',
          query: '300italic',
          name: 'Light italic',
          css: {
            fontWeight: '300',
            fontStyle: 'italic'
          },
        },
        {
          style: 'normal',
          weight: '300',
          query: '300normal',
          name: 'Light',
          css: {
            fontWeight: '300',
            fontStyle: 'normal'
          },
        },
        {
          style: 'italic',
          weight: '400',
          query: '400italic',
          name: 'Normal italic',
          css: {
            fontWeight: '400',
            fontStyle: 'italic'
          },
        },
        {
          style: 'normal',
          weight: '400',
          query: '400normal',
          name: 'Normal',
          css: {
            fontWeight: '400',
            fontStyle: 'normal'
          },
          selected: true,
        },
        {
          style: 'italic',
          weight: '500',
          query: '500italic',
          name: 'Medium italic',
          css: {
            fontWeight: '500',
            fontStyle: 'italic'
          },
        },
        {
          style: 'normal',
          weight: '500',
          query: '500normal',
          name: 'Medium',
          css: {
            fontWeight: '500',
            fontStyle: 'normal'
          },
        },
        {
          style: 'italic',
          weight: '600',
          query: '600italic',
          name: 'Semi Bold italic',
          css: {
            fontWeight: '600',
            fontStyle: 'italic'
          },
        },
        {
          style: 'normal',
          weight: '600',
          query: '600normal',
          name: 'Semi Bold',
          css: {
            fontWeight: '600',
            fontStyle: 'normal'
          },
        },
        {
          style: 'italic',
          weight: '700',
          query: '700italic',
          name: 'Bold italic',
          css: {
            fontWeight: '700',
            fontStyle: 'italic'
          },
        },
        {
          style: 'normal',
          weight: '700',
          query: '700normal',
          name: 'Bold',
          css: {
            fontWeight: '700',
            fontStyle: 'normal'
          },
        },
        {
          style: 'italic',
          weight: '800',
          query: '800italic',
          name: 'Extra Bold italic',
          css: {
            fontWeight: '800',
            fontStyle: 'italic'
          },
        },
        {
          style: 'normal',
          weight: '800',
          query: '800normal',
          name: 'Extra Bold',
          css: {
            fontWeight: '800',
            fontStyle: 'normal'
          },
        }
  ],
  color: {
    value: '#FFFFFF',
    opacity: 1,
  },
  shadow: undefined,
  letter: 0,
  line: 1.16,
  decoration: 'none',
};

export const useTextPanel = create(subscribeWithSelector<TextPanelStore>((set, get) => ({
  ...defaultTextPanel,
  setAlignment: (alignment: TextAlign) => {
    set((state) => ({
      ...state,
      alignment,
    }));
  },
  setContent: (content: string) => {
    set((state) => ({
      ...state,
      content,
    }));
  },
  setColor: (color: Color) => {
    set((state) => ({
      ...state,
      color,
    }));
  },
  setShadow: (shadow: Shadow) => {
    set((state) => ({
      ...state,
      shadow
    }));
  },
  setFont: (font: Font) => {
    set((state) => ({
      ...state,
      font,
    }));
  },
  setWeight: (weight: FontVariant[]) => {
    set((state) => ({
      ...state,
      weight,
    }));
  },
  setScale: (scale: FontScale) => {
    set((state) => ({
      ...state,
      scale,
    }));
  },
  setTextPanel: (data: TextPanel) => {
    set((state) => ({
      ...state,
      ...data,
    }));
  },
  setFontSize: (size: number) => {
    set((state) => ({
      ...state,
      size,
    }));
  },
  setFontLetter: (letter: number) => {
    set((state) => ({
      ...state,
      letter,
    }));
  },
  setFontLine: (line: number) => {
    set((state) => ({
      ...state,
      line
    }));
  },
  setTextDecoration: (decoration: TextDecoration) => {
    set((state) => ({
      ...state,
      decoration,
    }));
  }
})));