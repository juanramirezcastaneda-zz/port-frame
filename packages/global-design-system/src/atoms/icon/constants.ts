import {
  faBars,
  faBookmark,
  faChevronLeft,
  faChevronDown,
  faChevronRight,
  faChevronUp,
  faSearch,
} from '@fortawesome/free-solid-svg-icons';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const Icons: { [key: string]: any } = {
  bars: faBars,
  bookmark: faBookmark,
  chevronLeft: faChevronLeft,
  chevronDown: faChevronDown,
  chevronRight: faChevronRight,
  chevronUp: faChevronUp,
  search: faSearch,
};

export const IconOptions = Object.keys(Icons) as (keyof typeof Icons)[];
