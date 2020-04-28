import { HTMLAttributes } from 'react';
import { DefaultTheme } from 'styled-components';

export interface TextComponentProps {
  className?: string;
  size?: keyof DefaultTheme['fontSizes'];
}

export type TextProps = HTMLAttributes<HTMLDivElement> & TextComponentProps;
