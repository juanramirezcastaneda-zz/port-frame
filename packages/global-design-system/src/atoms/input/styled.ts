import styled, { css } from 'styled-components';
import { InputProps } from './types';

export const LabelStyled = styled.label<Pick<InputProps, 'isInline'>>`
  white-space: pre;
  ${(p) => {
    if (!p.isInline) {
      return css`
        margin-bottom: ${({ theme }) => theme.margins.label};
        margin-right: 0;
      `;
    } else {
      return css`
        align-self: center;
        margin-right: ${({ theme }) => theme.margins.labelInline};
        margin-bottom: 0;
      `;
    }
  }};
`;

export const InputContainerStyled = styled.div`
  width: 100%;
  .form-group {
    width: 100%;
  }
  .form-check-inline {
    min-height: 38px;
  }
`;

export const InputStyled = styled.div<Pick<InputProps, 'isInline'>>`
  width: 100%;
  display: flex;
  ${(p) => {
    if (!p.isInline) {
      return css`
        flex-direction: column;
      `;
    } else {
      return css`
        flex-direction: row;
      `;
    }
  }}
`;
