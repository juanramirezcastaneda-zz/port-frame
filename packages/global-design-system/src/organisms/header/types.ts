import { HTMLAttributes } from 'react';
import { BackgroundOptions } from './constants';

export type BackgroundOptionsType = typeof BackgroundOptions[number];

export interface HeaderProps {
  background: BackgroundOptionsType;
  loggedIn: boolean;
}

export interface HeaderStyledProps {
  background: 'dark' | 'transparent';
}

export type HeaderComponentProps = HTMLAttributes<HTMLDivElement> & HeaderProps;
