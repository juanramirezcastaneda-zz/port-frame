import { HTMLAttributes } from 'react';

export interface MobileNavAccordionComponentProps {
  className?: string;
}

export type MobileNavAccordionProps = HTMLAttributes<HTMLDivElement> & MobileNavAccordionComponentProps;
