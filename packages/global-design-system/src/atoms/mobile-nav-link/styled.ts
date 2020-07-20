import styled from 'styled-components';
import { MobileNavLinkProps } from './types';

export const MobileNavLinkStyled = styled.a<MobileNavLinkProps>`
  color: ${({ theme }) => theme.colors.blackText};
  display: block;
  font-size: ${(p) => p.theme.fontSizes[p.sublink ? '200' : '400']};
  font-weight: bold;
  padding: ${(p) => (p.sublink ? '0.815rem' : '0.75rem')} 0;

  &,
  &:hover {
    text-decoration: none;
  }
`;
