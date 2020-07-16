import React from 'react';
import { MobileNavAccordionStyled } from './styled';
import { MobileNavAccordionProps } from './types';

export function MobileNavAccordion({ children }: MobileNavAccordionProps) {
  return <MobileNavAccordionStyled>{children}</MobileNavAccordionStyled>;
}
