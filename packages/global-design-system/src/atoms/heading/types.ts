import { HTMLAttributes } from 'react';
import { HeadingAppearance } from './constants';
import FontSizes from '~/theme/fontSizes';
import Colors from '~/theme/colors';
import FontWeights from '~/theme/fontWeight';

export interface HeadingComponentProps {
  asHeading?: typeof HeadingAppearance[number];
  className?: string;
  color?: keyof typeof Colors;
  fontSize?: keyof typeof FontSizes;
  fontWeight?: keyof typeof FontWeights;
}

export type HeadingProps = HTMLAttributes<HTMLDivElement> & HeadingComponentProps;
