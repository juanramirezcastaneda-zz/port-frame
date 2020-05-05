import styled, { css } from 'styled-components';

export const DateInputStyled = styled.div`
  .react-datepicker-wrapper {
    width: 100%;
  }

  input {
    border: none;
    box-sizing: border-box;
    outline: none;
    width: 100%;
  }
`;

export const DateInputContainerStyled = styled.div`
  border: 1px solid #ced4da;
  border-radius: 0.25rem;
  :focus > input {
    background-color: transparent;
    border-color: #80bdff;
    box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.25);
    outline: 0;
  }
`;

// export const LabelStyled = styled.label`
//   ${css`
//     margin-bottom: ${({ theme }) => theme.margins.label};
//   `}
// `;
