import React, { FC } from 'react';
import { SocialLinksStyled } from './styled';
import { SocialLinksProps } from './types';

export const SocialLinks: FC<SocialLinksProps> = ({ children }) => {
  return <SocialLinksStyled>{children}</SocialLinksStyled>;
};
