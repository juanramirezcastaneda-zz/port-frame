import { HTMLAttributes } from 'react';

export interface MobileNavLinkComponentProps {
  className?: string;
}

export type MobileNavLinkProps = HTMLAttributes<HTMLDivElement> & MobileNavLinkComponentProps;
