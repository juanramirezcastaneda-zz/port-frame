import { Appearance } from './constants';

export interface SocialLinksProps {
  appearance?: typeof Appearance[number];
  className?: string;
  facebookUrl: string;
  linkedinUrl: string;
  twitterUrl: string;
  youtubeUrl: string;
}
