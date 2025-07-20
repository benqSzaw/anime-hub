import { ReactNode } from 'react';
import Link, { LinkProps } from 'next/link';

type Props = Omit<Omit<LinkProps, 'target'>, 'rel'> & {
  className?: string;
  children: ReactNode;
};

function ExternalLink(props: Props) {
  return (
    <Link {...props} rel="noopener noreferrer" target="_blank">
      {props.children}
    </Link>
  );
}

export { ExternalLink };
