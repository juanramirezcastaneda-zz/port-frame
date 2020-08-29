import styled, { css } from 'styled-components';
import { CardProps } from './types';
import { TextStyled } from '~/atoms/text';
import { ReactComponent as IconContainerBackground } from '~/assets/product-category-placeholder-hover.svg';

export const IconContainer = styled.div`
  display: flex;
  min-width: 100px;
  min-height: 100px;

  @media (max-width: ${(p) => p.theme.breakpointsMax[3]}) {
    min-width: 48px;
    min-height: 48px;
  }
`;

export const IconContainerBackgroundStyled = styled(IconContainerBackground)`
  transition: 0.2s all;

  @media (max-width: ${(p) => p.theme.breakpointsMax[3]}) {
    transform: scale(0.5);
  }
`;

export const hoverMobileStyles = css`
  text-decoration: none;

  transition: 0.2s all;
`;

export const CardStyled = styled.a<CardProps>`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  text-decoration: none;
  padding: 1rem 0;
  & :not(:hover) {
    & path {
      fill: ${({ theme }) => theme.colors.lightBlue};
    }
  }

  &:hover {
    ${hoverMobileStyles}

    & path {
      mask: none;
    }
  }

  min-height: 212px;

  @media (max-width: ${(p) => p.theme.breakpointsMax[3]}) {
    min-height: 120px;
  }

  border-radius: 4px;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.2), 0 2px 1px -1px rgba(0, 0, 0, 0.12), 0 1px 1px 0 rgba(0, 0, 0, 0.14);

  position: relative;

  ${TextStyled} {
    color: ${({ theme }) => theme.colors.gray};

    font-size: ${({ theme }) => theme.fontSizes['300']};
    font-family: ${({ theme }) => theme.fontFamilies.roboto};
    font-weight: ${({ theme }) => theme.fontWeights.bold};
    font-stretch: normal;
    font-style: normal;
    letter-spacing: normal;
    text-align: center;

    @media (max-width: ${(p) => p.theme.breakpointsMax[3]}) {
      font-size: ${({ theme }) => theme.fontSizes[100]};
    }
  }
`;

export const TextContainer = styled.div`
  position: relative;
  margin-top: 6px;
  text-align: center;
  width: 100%;

  @media (max-width: ${(p) => p.theme.breakpointsMax[3]}) {
    margin-top: 8px;
  }
`;
