import React, { FC } from 'react';
import { HeaderStyled } from './styled';
import { HeaderProps } from './types';

export function Header({ children }: HeaderProps) {
  return <HeaderStyled>{children}</HeaderStyled>;
}
