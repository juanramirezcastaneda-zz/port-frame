import React from 'react';
import { InputProps } from './types';
import { LabelStyled, InputStyled, InputComponentStyled } from './styled';

export function Input({ disabled, isInline, label, placeholder, type, value }: InputProps) {
  const labelComponent = label ? <LabelStyled>{label}</LabelStyled> : null;

  return (
    <InputStyled disabled={disabled} isInline={isInline}>
      {labelComponent}
      <InputComponentStyled placeholder={placeholder} type={type} value={value} />
    </InputStyled>
  );
}

Input.defaultProps = {
  isInline: false,
};
