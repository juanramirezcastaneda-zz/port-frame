import { HTMLAttributes } from 'react';
import { InputType } from './constants';

interface InputComponentProps {
  disabled?: boolean;
  isInline: boolean;
  label?: string;
  type?: typeof InputType[number];
  validator?: RegExp;
  value?: string;
}

export type InputProps = HTMLAttributes<HTMLInputElement> & InputComponentProps;
