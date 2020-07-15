import React from 'react';
import { SocialLinksStyled, SocialLink } from './styled';
import { SocialLinksProps } from './types';
import { Icon } from '~/atoms/icon';

export function SocialLinks({
  appearance = 'Light',
  facebookUrl,
  linkedinUrl,
  twitterUrl,
  youtubeUrl,
}: SocialLinksProps) {
  return (
    <SocialLinksStyled>
      <SocialLink href={linkedinUrl} appearance={appearance}>
        <Icon icon="linkedin" />
      </SocialLink>
      <SocialLink href={twitterUrl} appearance={appearance}>
        <Icon icon="twitter" />
      </SocialLink>
      <SocialLink href={facebookUrl} appearance={appearance}>
        <Icon icon="facebook" />
      </SocialLink>
      <SocialLink href={youtubeUrl} appearance={appearance}>
        <Icon icon="youtube" />
      </SocialLink>
    </SocialLinksStyled>
  );
}
