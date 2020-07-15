import styled from 'styled-components';
import { SocialLinksProps } from './types';

export const SocialLinksStyled = styled.div`
  display: flex;
  padding: ${({ theme }) => theme.space['500']} ${({ theme }) => theme.space[300]};
`;

export const SocialLink = styled.a<Pick<SocialLinksProps, 'appearance'>>`
  display: block;
  color: ${(p) => (p.appearance === 'Dark' ? p.theme.colors.blackCore : p.theme.colors.gray)};
  font-size: 1.5rem;
  margin-right: ${({ theme }) => theme.space['500']};
  padding: ${({ theme }) => theme.space['200']};

  &:last-child {
    margin-right: 0;
  }
`;
