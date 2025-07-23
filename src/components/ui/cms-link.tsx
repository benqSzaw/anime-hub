import NextLink from 'next/link';
import React from 'react';
import { Page } from '@/payload-types';
import { formatPageSlug } from '@/lib/payload';
import { Button } from '@/components/ui/button';

type Props = {
  type: 'reference' | 'custom';
  newTab?: boolean | null;
  label: string;
  reference?: {
    relationTo: 'pages';
    value: number | Page;
  } | null;
  url?: string | null;
};

function CmsLink(props: Props) {
  const { type, newTab, label, reference, url } = props;
  return (
    <Button variant="outline" asChild>
      <NextLink
        href={
          type == 'custom'
            ? url!
            : `/${formatPageSlug((reference?.value as Page).slug)}`
        }
        rel={type == 'custom' ? 'noopener noreferrer' : undefined}
        target={newTab ? '_blank' : undefined}
      >
        {label}
      </NextLink>
    </Button>
  );
}

export { CmsLink };
