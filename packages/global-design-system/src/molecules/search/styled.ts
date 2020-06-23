import styled from 'styled-components';
import { getBoxShadow } from '~/ions/elevations';
import { SearchListProps, SearchProps } from './types';

const transitionTime = '0.5s';

export const SearchContainer = styled.div`
  visibility: hidden;
  position: relative;
  @media (min-width: ${(p) => p.theme.breakpoints[3]}) {
    visibility: visible;
  }
`;

export const SearchStyled = styled.div<Pick<SearchProps, 'isLoggedIn'>>`
  width: 100%;
  position: relative;
  z-index: 1;

  @media (max-width: ${(p) => p.theme.breakpoints[3]}) {
    display: none;
  }

  & svg {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    &.fa-search {
      right: 8px;
    }
  }

  & input {
    padding-left: 17px;
    padding-right: 72px;
    :focus {
      ${getBoxShadow(6)}
    }
  }

  & input + svg {
    opacity: 0;
    transition: ${transitionTime} opacity;
    color: ${(p) => p.theme.colors.gray};
    min-width: 30px;
    padding-right: 8px;
    border-right: solid 2px ${(p) => p.theme.colors.gray};
    position: absolute;
    right: 30px;
    left: auto;
  }

  & input:focus + svg {
    opacity: 1;
    transition: ${transitionTime} opacity;
  }
`;

export const SearchStyledItem = styled.div`
  position: relative;
  z-index: 1;
  padding-left: 16px;
  padding-right: 10px;
  height: 32px;
  font-family: ${(p) => p.theme.fontFamilies.roboto};
  font-size: ${(p) => p.theme.fontSizes[200]};
  font-weight: ${(p) => p.theme.fontWeights.normal};
  font-stretch: normal;
  font-style: normal;
  line-height: 2.29;
  letter-spacing: normal;
  & a {
    color: black;
    width: 100%;
  }
  &:hover {
    background-color: ${(p) => p.theme.colors.gray};
  }
`;

export const SearchStyledProducts = styled.div<Pick<SearchListProps, 'areSearchOptionsVisible' | 'isLoggedIn'>>`
  opacity: ${(p) => {
    return p.areSearchOptionsVisible ? 1 : 0;
  }};
  transition: ${transitionTime} opacity;
  position: absolute;
  top: 0;
  left: 0;
  border-radius: 4px;
  background-color: ${(p) => p.theme.colors.whiteCore};
  width: 100%;
  z-index: -1;
  padding-top: 56px;
  padding-bottom: 16px;
  ${getBoxShadow(4)}
`;
