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
    height: 100%;
    outline: none;
    padding: 6px 12px;
    width: 100%;
  }

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

export const DateInputContainerStyled = styled.div`
  border: 1px solid #ced4da;
  border-radius: 0.25rem;
  height: 38px;
  width: 100%;
  :focus > input {
    border-color: #80bdff;
    box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.25);
    outline: 0;
  }
`;

export const LabelStyled = styled.label<Pick<DateInputProps, 'isInline'>>`
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
