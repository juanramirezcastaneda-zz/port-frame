import styled, { css } from 'styled-components';
import { ButtonComponentProps } from './types';

function getAppearance() {
  return css``;
}

export const ButtonStyled = styled.button<ButtonComponentProps>`
  ${getAppearance}
`;
