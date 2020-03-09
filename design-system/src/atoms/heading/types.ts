import { HTMLAttributes } from 'react';
import { HeadingAppearance } from './constants';
// import Colors from '~/theme/colors';
// import FontSizes from '~/theme/fontSizes';
// import FontSizesMobile from '~/theme/fontSizesMobile';
// import FontWeights from '~/theme/fontWeights';
// import LineHeights from '~/theme/lineHeights';

export interface HeadingComponentProps {
  asHeading?: typeof HeadingAppearance[number];
  className?: string;
  //   color?: keyof typeof Colors;
  //   fontWeight?: typeof FontWeights[number];
  //   lineHeight?: typeof LineHeights[number];
  //   desktopSize?: keyof typeof FontSizes;
  //   mobileSize?: keyof typeof FontSizesMobile;
  //   tabletSize?: keyof typeof FontSizesMobile;
}

export type HeadingProps = HTMLAttributes<HTMLHeadingElement> &
  HeadingComponentProps;
