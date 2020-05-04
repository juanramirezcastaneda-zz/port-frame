import React from 'react';
import { ButtonStyled } from './styled';
import { ButtonProps } from './types';

export function Button({ children, ...props }: ButtonProps) {
  return <ButtonStyled {...props}>{children}</ButtonStyled>;
}

Button.defaultProps = {
  disabled: false,
  ghost: false,
};
