import React from 'react';
import { InputProps } from './types';
import { LabelStyled, InputStyled, InputComponentStyled, InputContainerStyled } from './styled';

export function Input({ disabled, isInline, label, placeholder, type, value }: InputProps) {
  const labelComponent = label ? <LabelStyled isInline={isInline}>{label}</LabelStyled> : null;

  return (
    <InputStyled isInline={isInline}>
      {labelComponent}
      <InputContainerStyled>
        <InputComponentStyled disabled={disabled} placeholder={placeholder} type={type} value={value} />
      </InputContainerStyled>
    </InputStyled>
  );
}

Input.defaultProps = {
  isInline: false,
};
