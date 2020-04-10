import { HTMLAttributes } from 'react';

export interface HeadingComponentProps {
  className?: string;
}

export type HeadingProps = HTMLAttributes<HTMLDivElement> & HeadingComponentProps;
