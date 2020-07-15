import {
  faBars,
  faBookmark,
  faChevronLeft,
  faChevronDown,
  faChevronRight,
  faChevronUp,
  faSearch,
  faUser,
} from '@fortawesome/free-solid-svg-icons';

import { faFacebookF, faLinkedinIn, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const Icons: { [key: string]: any } = {
  bars: faBars,
  bookmark: faBookmark,
  chevronLeft: faChevronLeft,
  chevronDown: faChevronDown,
  chevronRight: faChevronRight,
  chevronUp: faChevronUp,
  facebook: faFacebookF,
  linkedin: faLinkedinIn,
  search: faSearch,
  twitter: faTwitter,
  user: faUser,
  youtube: faYoutube,
};

export const IconOptions = Object.keys(Icons) as (keyof typeof Icons)[];
