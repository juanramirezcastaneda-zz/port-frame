import React from 'react';
import { MobileNavLinkStyled } from './styled';
import { MobileNavLinkProps } from './types';

export function MobileNavLink({ children }: MobileNavLinkProps) {
  return <MobileNavLinkStyled>{children}</MobileNavLinkStyled>;
}
