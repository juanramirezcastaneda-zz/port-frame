import styled from 'styled-components';
import { HeadingProps } from './types';
import theme from '~/theme';

export const HeadingStyled = styled.h1<HeadingProps>`
  letter-spacing: normal;
  font-family: ${theme.fontFamilies.lato}, sans-serif;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
`;
