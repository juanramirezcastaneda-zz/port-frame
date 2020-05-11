import styled, { css } from 'styled-components';
import { DateInputProps } from './types';

export const DateInputStyled = styled.div<Pick<DateInputProps, 'isInline'>>`
  .react-datepicker-wrapper {
    height: 38px;
    width: 100%;
  }
  .react-datepicker__input-container {
    height: 100%;
  }

  input {
    border: none;
    border-radius: 0.25rem;
    font-size: 1rem;
    height: 95%;
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
  }

  display: flex;
  ${(p) => {
    if (p.isInline) {
      return css`
        flex-direction: row;
      `;
    } else {
      return css`
        flex-direction: column;
      `;
    }
  }}
`;

export const DateInputContainerStyled = styled.div`
  border: 1px solid #ced4da;
  border-radius: 0.25rem;
  height: 38px;
  width: 100%;
`;

export const LabelStyled = styled.label<Pick<DateInputProps, 'isInline'>>`
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
