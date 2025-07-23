import NextLink from 'next/link';
import React, { ReactNode } from 'react';
import { cn } from '@/lib/ui';

type Props = {
  href: string;
  children: ReactNode;
  internal?: boolean;
  newTab?: boolean;
  decorated?: boolean;
  className?: string;
};

function Link(props: Props) {
  const {
    href,
    children,
    internal = true,
    newTab = false,
    decorated = false,
    className,
  } = props;
  return (
    <NextLink
      href={href}
      className={cn(
        decorated && 'underline decoration-1 underline-offset-3',
        className,
      )}
      rel={!internal ? 'noopener noreferrer' : ''}
      target={newTab ? '_blank' : undefined}
    >
      {children}
    </NextLink>
  );
}

export { Link };
