import { HTMLAttributes } from 'react';

export interface SocialLinksComponentProps {
  className?: string;
}

export type SocialLinksProps = HTMLAttributes<HTMLDivElement> & SocialLinksComponentProps;
