import { HTMLAttributes } from 'react';
import { HeadingAppearance } from './constants';
import FontSizes from '~/theme/fontSizes';

export interface HeadingComponentProps {
  asHeading?: typeof HeadingAppearance[number];
  className?: string;
  fontSize?: keyof typeof FontSizes;
}

export type HeadingProps = HTMLAttributes<HTMLDivElement> & HeadingComponentProps;
