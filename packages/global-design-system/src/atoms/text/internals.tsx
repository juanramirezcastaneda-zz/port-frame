import React from 'react';
import { TextStyled } from './styled';
import { TextProps } from './types';

export function Text({ children, className, size }: TextProps) {
  return (
    <TextStyled className={className} size={size}>
      {children}
    </TextStyled>
  );
}
