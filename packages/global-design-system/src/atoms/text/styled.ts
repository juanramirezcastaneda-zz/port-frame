import styled, { css } from 'styled-components';
import { TextProps } from './types';

export const getTextSize = ({ size }: TextProps) => {
  if (size) {
    return css`
      font-size: ${({ theme }) => theme.fontSizes[size]};
    `;
  }

  return null;
};

export const getTextStyles = css`
  color: inherit;
  font-family: inherit;
  font-size: inherit;
  ${getTextSize};
`;

export const TextStyled = styled.span<TextProps>`
  ${getTextStyles};
`;
