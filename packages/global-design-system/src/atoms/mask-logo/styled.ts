import LogoSVG from './logo-svg';
import styled, { css } from 'styled-components';
import { MaskLogoProps } from './types';

export const MaskLogoStyled = styled.div<MaskLogoProps>`
  align-items: center;
  display: inline-flex;

  ${(p) =>
    p.orientation === 'Vertical' &&
    css`
      flex-direction: column;
    `}
`;

export const MaskLogoSvgStyled = styled(LogoSVG)<MaskLogoProps>`
  width: 2.5em;

  ${(p) =>
    p.appearance === 'Light' &&
    css`
      .gradient-stop:first-child {
        stop-color: ${(p) => p.theme.colors.whiteCore};
      }

      .gradient-stop:last-child {
        stop-color: ${(p) => p.theme.colors.whiteCore};
      }
    `}
`;

export const MaskLogoText = styled.div<any>`
  color: ${(p) => p.theme.colors[p.textColor]};
  font-family: 'Lato', sans-serif;
  font-size: 1.75em;
  font-weight: bold;
  margin-left: 10px;

  ${(p) =>
    p.orientation === 'Vertical' &&
    css`
      font-size: 1em;
      margin-left: 0;
      margin-top: 0.5em;
    `}
`;
