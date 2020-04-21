import React from 'react';
import { Icons } from './constants';
import { IconStyled } from './styled';
import { IconProps } from './types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export function Icon({ icon, ...props }: IconProps) {
  return (
    <IconStyled>
      <FontAwesomeIcon icon={Icons[icon]} {...props} />
    </IconStyled>
  );
}
