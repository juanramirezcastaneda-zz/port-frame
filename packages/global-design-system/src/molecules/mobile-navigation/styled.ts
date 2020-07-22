import styled, { css } from 'styled-components';
import { getBoxShadow } from '~/ions/elevations';

const menuAnimationDuration = '0.4s';

export const CloseButton = styled.button`
  background: transparent;
  border: none;
  font-size: 1rem;
  margin-left: auto;
  outline: none;
  padding: 0 0.625rem;
`;

export const Menu = styled.div<any>`
  background-color: ${({ theme }) => theme.colors.gray};
  opacity: 0.8;
  visibility: hidden;
  height: 100%;
  overflow: auto;
  padding: ${({ theme }) => theme.space['400']};
  padding-top: 0;
  position: absolute;
  right: 0;
  top: 0;
  transform: translateX(110%);
  transition: ${menuAnimationDuration} transform, 0s visibility ${menuAnimationDuration};
  width: 100%;

  ${(p) =>
    p.isOpen &&
    css`
      transform: translateX(0);
      transition: ${menuAnimationDuration} transform, 0s visibility;
      visibility: visible;
    `};


  ${getBoxShadow(4)}

  @media (min-width: ${({ theme }) => theme.breakpoints[0]}) {
    max-width: 320px;
  }
`;

export const MenuHeader = styled.header`
  background-color: inherit;
  border-bottom: solid 4px ${({ theme }) => theme.colors.gray};
  opacity: 0.6;
  display: flex;
  font-size: 0.7rem;
  padding: ${({ theme }) => theme.space['300']} 0;
  position: sticky;
  top: 0;
`;

export const MobileNavigationStyled = styled.div<any>`
  height: 100vh;
  left: 0;
  position: fixed;
  top: 0;
  transition: 0s visibility ${menuAnimationDuration};
  visibility: hidden;
  width: 100vw;
  z-index: 2;

  ${(p) =>
    p.isOpen &&
    css`
      transition: 0s visibility;
      visibility: visible;
    `}
`;

export const Overlay = styled.div<any>`
  background-color: ${({ theme }) => theme.colors.darkOfmp};
  display: none;
  height: 100%;
  opacity: 0;
  position: absolute;
  transition: ${menuAnimationDuration} opacity, 0s visibility ${menuAnimationDuration};
  visibility: hidden;
  width: 100%;

  ${(p) =>
    p.isVisible &&
    css`
      opacity: 0.3;
      transition: ${menuAnimationDuration} opacity, 0s visibility;
      visibility: visible;
    `};

  @media (min-width: ${({ theme }) => theme.breakpoints[0]}) {
    display: block;
  }
`;
