import Colors from '~/theme/colors';
import { HTMLAttributes } from 'react';
import { MaskLogoAppearance, MaskLogoOrientation } from './constants';

export interface MaskLogoComponentProps {
  appearance?: typeof MaskLogoAppearance[number];
  orientation?: typeof MaskLogoOrientation[number];
  textColor?: keyof typeof Colors;
}

export type MaskLogoProps = HTMLAttributes<HTMLDivElement> & MaskLogoComponentProps;
