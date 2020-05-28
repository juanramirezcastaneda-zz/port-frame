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
          color: ${theme.colors.blue};
          border-color: ${theme.colors.lightBlue};

          &:hover,
          &:focus {
            background: ${theme.colors.blue};
            color: ${theme.colors.whiteCore};
          }

          &[disabled] {
            cursor: not-allowed;
            opacity: 60%;
          }
        `;
      case 'Secondary':
        return css`
          ${baseStyles};
          color: ${theme.colors.red};
          border-color: ${theme.colors.lightRed};

          &:hover,
          &:focus {
            background: ${theme.colors.red};
            color: ${theme.colors.whiteCore};
          }

          &[disabled] {
            cursor: not-allowed;
            opacity: 60%;
          }
        `;
      case 'Tertiary':
        return css`
          ${baseStyles};
          color: ${theme.colors.yellow};
          border-color: ${theme.colors.lightYellow};

          &:hover,
          &:focus {
            background: ${theme.colors.yellow};
            color: ${theme.colors.whiteCore};
          }

          &[disabled] {
            cursor: not-allowed;
            opacity: 60%;
          }
        `;
      case 'Default':
        return css`
          ${baseStyles};
          border-color: ${theme.colors.blackCore};
        `;
    }
  } else {
    switch (appearance) {
      case 'Primary':
        return css`
          background: ${theme.colors.blue};
          color: ${theme.colors.whiteCore};

          &:hover,
          &:focus {
            opacity: 80%;
          }

          &[disabled] {
            cursor: not-allowed;
            opacity: 60%;
          }
        `;
      case 'Secondary':
        return css`
          background: ${theme.colors.red};
          border-color: ${theme.colors.lightRed};
          color: ${theme.colors.whiteCore};

          &:hover,
          &:focus {
            opacity: 80%;
          }

          &[disabled] {
            cursor: not-allowed;
            opacity: 60%;
          }
        `;
      case 'Default':
        return css`
          background: ${theme.colors.gray};
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
