import { HTMLAttributes } from 'react';

export interface HeaderComponentProps {
  className?: string;
}

export type HeaderProps = HTMLAttributes<HTMLDivElement> & HeaderComponentProps;
