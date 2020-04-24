import { DefaultTheme } from 'styled-components';
import { ThemeProviderProps } from '~/theme/types';

export interface TextComponentProps {
  className?: string;
  size?: keyof DefaultTheme['fontSizes'];
}

export type TextProps = TextComponentProps & ThemeProviderProps;
