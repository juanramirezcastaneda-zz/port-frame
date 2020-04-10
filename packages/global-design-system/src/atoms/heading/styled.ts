import styled, { css } from 'styled-components';
import { HeadingProps } from './types';

export const HeadingStyled = styled.h1<HeadingProps>`
  letter-spacing: normal;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;

  ${({ theme }) =>
    css`
      font-family: ${theme.fontFamilies.roboto};
    `}
`;
