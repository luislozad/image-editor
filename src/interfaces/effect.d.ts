import { Color } from './color';

export interface Shadow {
  color: Color;
  pos: {
    x: number;
    y: number;
  };
  blur: number;
}