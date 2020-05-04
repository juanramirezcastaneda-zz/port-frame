import styled, { DefaultTheme, ThemedStyledProps, css } from 'styled-components';
import { ButtonProps } from './types';

function getAppearanceStyles({ appearance, ghost, theme }: ThemedStyledProps<ButtonProps, DefaultTheme>) {
  return css``;
}

export const ButtonStyled = styled.button<ButtonProps>`
  ${getAppearanceStyles}
`;
