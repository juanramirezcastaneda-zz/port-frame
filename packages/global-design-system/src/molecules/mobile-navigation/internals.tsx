import React from 'react';
import { MobileNavigationStyled } from './styled';
import { MobileNavigationProps } from './types';

export function MobileNavigation({ children }: MobileNavigationProps) {
  return <MobileNavigationStyled>{children}</MobileNavigationStyled>;
}
