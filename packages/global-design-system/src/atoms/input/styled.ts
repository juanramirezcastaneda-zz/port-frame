import styled, { css } from 'styled-components';
import { InputProps } from './types';

export const InputStyled = styled.div<Pick<InputProps, 'isInline'>>``;

export const InputComponentStyled = styled.input``;

export const InputContainerStyled = styled.div`
  border: 1px solid #ced4da;
  border-radius: 0.25rem;
  height: 38px;
  width: 100%;
`;

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
