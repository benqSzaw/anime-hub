import { getDocument } from '@/lib/payload';
import { notFound } from 'next/navigation';
import { PageWrapper } from '@/components/ui/page-wrapper';
import { RenderBlocks } from '@/components/render-blocks';

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function PayloadPages({ params }: Props) {
  const { slug } = await params;
  const page = await getDocument('pages', slug);
  if (!page) notFound();

  return (
    <PageWrapper>
      {page.title}
      <RenderBlocks blocks={page.layout} />
    </PageWrapper>
  );
}
