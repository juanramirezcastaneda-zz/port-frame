import { HTMLAttributes } from 'react';

export interface SearchComponentProps {
  isLoggedIn: boolean;
}

export interface SearchComponentListProps extends SearchComponentProps {
  areSearchOptionsVisible: boolean;
}

export type SearchProps = HTMLAttributes<HTMLDivElement> & SearchComponentProps;
export type SearchListProps = HTMLAttributes<HTMLDivElement> & SearchComponentListProps;
