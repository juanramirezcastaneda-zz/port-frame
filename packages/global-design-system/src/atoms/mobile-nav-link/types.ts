import { HTMLAttributes } from 'react';

export interface MobileNavLinkComponentProps {
  children?: string;
  href?: string;
  sublink?: boolean;
}

export type MobileNavLinkProps = HTMLAttributes<HTMLAnchorElement> & MobileNavLinkComponentProps;
