import { HTMLAttributes } from 'react';
import { HeadingAppearance } from './constants';

export interface HeadingComponentProps {
  asHeading?: typeof HeadingAppearance[number];
  className?: string;
}

export type HeadingProps = HTMLAttributes<HTMLDivElement> & HeadingComponentProps;
