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
  border-radius: 0.25rem;
  border: none;
  cursor: pointer;
  display: inline-block;
  font-family: ${({ theme }) => theme.fontFamilies.roboto};
  font-size: 0.875rem;
  font-weight: 700;
  line-height: 1.2;
  outline: none;
  padding: 0.75rem 1.5rem;
  text-decoration: none;
  transition: 0.1s all;

  ${getAppearanceStyles}
`;
