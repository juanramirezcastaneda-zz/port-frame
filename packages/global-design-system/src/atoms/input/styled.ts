import styled, { css } from 'styled-components';
import { InputProps } from './types';

export const LabelStyled = styled.label`
  white-space: pre;
`;

export const InputStyled = styled.div<Pick<InputProps, 'isInline' | 'disabled'>>`
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

export const InputComponentStyled = styled.input``;

// ${(p) => {
//   if (!p.isInline) {
//     return css`
//       margin-bottom: ${({ theme }) => theme.margins.label};
//       margin-right: 0;
//     `;
//   } else {
//     return css`
//       align-self: center;
//       margin-right: ${({ theme }) => theme.margins.labelInline};
//       margin-bottom: 0;
//     `;
//   }
// }};
