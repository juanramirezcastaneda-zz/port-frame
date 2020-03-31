import React from 'react';

interface Props {
  className?: string;
}

export default function Homepage({ className }: Props) {
  return <div className={className}>Hello from the main page!</div>;
}
