import React from 'react';
import { IconStyled } from './styled';
import { IconProps } from './types';

export function Icon({ icon }: IconProps) {
  return <IconStyled icon="bars"></IconStyled>;
}
