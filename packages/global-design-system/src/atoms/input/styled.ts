import styled, { css } from 'styled-components';
import { InputProps } from './types';

export const InputStyled = styled.div<Pick<InputProps, 'isInline'>>`
  display: flex;

  ${(p) => {
    if (p.isInline) {
      return css`
        flex-direction: row;
        height: 38px;
      `;
    } else {
      return css`
        flex-direction: column;
      `;
    }
  }}
`;

export const InputComponentStyled = styled.input`
  border: none;
  border-radius: 0.25rem;
  font-size: 1rem;
  height: 100%;
  outline: none;
  padding: 6px 12px;
  width: 100%;
  :focus {
    box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.25);
  }
  :disabled {
    background-color: #e9ecef;
    color: #495057;
    cursor: not-allowed;
  }
`;

export const InputContainerStyled = styled.div<Pick<InputProps, 'type'>>`
  ${(p) => {
    const baseStyles = css`
      height: 38px;
    `;
    switch (p.type) {
      case 'text':
        return css`
          ${baseStyles}
          border: 1px solid #ced4da;
          border-radius: 0.25rem;
          width: 100%;
        `;
      case 'checkbox':
        return css`
          > input {
            ${baseStyles}
            margin: auto;
            width: auto;
          }
        `;
    }
  }}
`;

export const LabelStyled = styled.label<Pick<InputProps, 'isInline'>>`
  white-space: pre;
  ${(p) => {
    if (p.isInline) {
      return css`
        align-self: center;
        margin-right: ${({ theme }) => theme.margins.labelInline};
        margin-bottom: 0;
      `;
    } else {
      return css`
        margin-bottom: ${({ theme }) => theme.margins.label};
        margin-right: 0;
      `;
    }
  }};
`;
