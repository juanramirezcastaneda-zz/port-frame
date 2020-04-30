import { ButtonHTMLAttributes } from 'react';
import { ButtonAppearance } from './constants';

export interface ButtonComponentProps {
  appearance?: typeof ButtonAppearance[number];
  as?: 'button';
  className?: string;
  disabled?: boolean;
  ghost?: boolean;
}

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & ButtonComponentProps;
