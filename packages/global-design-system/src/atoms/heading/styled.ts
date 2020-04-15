import styled, { css } from 'styled-components';
import { HeadingProps } from './types';

export const getHeadingColor = ({ color }: HeadingProps) =>
  color &&
  css`
    color: ${({ theme }) => theme.colors[color]};
  `;

export const getHeadingFontSize = ({ fontSize }: HeadingProps) =>
  fontSize &&
  css`
    font-size: ${({ theme }) => theme.fontSizes[fontSize]};
  `;

export const getFontWeight = ({ fontWeight }: HeadingProps) =>
  fontWeight &&
  css`
    font-weight: ${({ theme }) => theme.fontWeights[fontWeight]};
  `;

export const HeadingStyled = styled.h1<HeadingProps>`
  letter-spacing: normal;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;

  ${({ theme }) =>
    css`
      font-family: ${theme.fontFamilies.roboto};
    `}

  ${getHeadingFontSize};
`;
