import { HTMLAttributes } from 'react';

export interface CardComponentProps {
  name: string;
  class?: string;
  href: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  ref?: any;
}

export type CardProps = HTMLAttributes<HTMLAnchorElement> & CardComponentProps;
