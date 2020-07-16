import React from 'react';
import { MobileNavLinkStyled } from './styled';
import { MobileNavLinkProps } from './types';

export function MobileNavLink({ className, children, href, sublink }: MobileNavLinkProps) {
  return (
    <MobileNavLinkStyled className={className} href={href} sublink={sublink}>
      {children}
    </MobileNavLinkStyled>
  );
}
