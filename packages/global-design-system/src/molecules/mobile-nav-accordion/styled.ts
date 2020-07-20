import styled, { css } from 'styled-components';
import { MobileNavLinkStyled } from '~/atoms/mobile-nav-link';

export const Header = styled.div`
  display: flex;
`;

export const IconLink = styled.button<{ isOpen: boolean }>`
  background: transparent;
  border: none;
  cursor: pointer;
  font-size: 1rem;
  margin-left: auto;
  outline: none;
  padding: 0 0.625rem;
  transition: 0.2s transform;

  ${(p) =>
    p.isOpen &&
    css`
      transform: rotate(180deg);
    `};
`;

export const MobileNavAccordionStyled = styled.div``;

export const SubLinks = styled.div`
  border-left: 2px solid ${({ theme }) => theme.colors.gray};

  ${MobileNavLinkStyled} {
    padding-left: ${({ theme }) => theme.space['600']};
  }
`;

export const SubLinksContainer = styled.div<any>`
  height: ${(p) => p.height};
  overflow: hidden;
`;
