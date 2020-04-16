import { Icons } from './constants';
import { FontAwesomeIconProps } from '@fortawesome/react-fontawesome';

export interface IconProps extends Omit<FontAwesomeIconProps, 'icon'> {
  icon: keyof typeof Icons;
}
