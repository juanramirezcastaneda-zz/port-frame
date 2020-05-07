import styled, { DefaultTheme, ThemedStyledProps, css } from 'styled-components';
import { ButtonProps } from './types';

function getAppearanceStyles({ appearance, ghost, theme }: ThemedStyledProps<ButtonProps, DefaultTheme>) {
  if (ghost) {
    const baseStyles = css`
      border: solid 1px;
      background: transparent;
      color: ${theme.colors.blackText};
    `;
    switch (appearance) {
      case 'Primary':
        return css`
          ${baseStyles};
        `;
      default:
        return css`
          ${baseStyles};
          border-color: ${theme.colors.whiteCore};
          color: ${theme.colors.whiteCore};
        `;
    }
  }
}

export const ButtonStyled = styled.button<ButtonProps>`
  ${getAppearanceStyles}
`;
