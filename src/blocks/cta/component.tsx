import React from 'react';

import type { CTABlock as CTABlockProps } from '@/payload-types';
import { RichText } from '@/components/ui/rich-text';
import { Container } from '@/components/ui/container';

export function CTAComponent({ richText }: CTABlockProps) {
  return <Container>{richText && <RichText data={richText} />}</Container>;
}
