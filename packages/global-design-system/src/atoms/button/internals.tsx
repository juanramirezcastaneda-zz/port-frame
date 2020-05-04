import React from 'react';
import { ButtonStyled } from './styled';
import { ButtonProps } from './types';

export function Button({ children, color }: ButtonProps) {
  return <ButtonStyled color={color}>{children}</ButtonStyled>;
}

Button.defaultProps = {
  disabled: false,
  ghost: false,
};
