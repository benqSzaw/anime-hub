import { getAllDocuments, getDocument } from '@/lib/payload';
import { notFound } from 'next/navigation';
import { PageWrapper } from '@/components/ui/page-wrapper';
import { RenderBlocks } from '@/components/render-blocks';
import { LivePreview } from '@/components/ui/live-preview';
import { generatePageMeta } from '@/lib/metadata';
import { Metadata } from 'next';

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateStaticParams() {
  const pages = await getAllDocuments('pages');
  const pagesSlugs = pages
    .map(page => ({
      slug: page.slug,
    }))
    .filter(page => page.slug !== 'home');

  return pagesSlugs.length == 0 ? [] : pagesSlugs;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const page = await getDocument('pages', slug || 'home');
  if (!page || slug == 'home') notFound();
  return generatePageMeta(page);
}

export default async function PayloadPage({ params }: Props) {
  const { slug } = await params;
  const page = await getDocument('pages', slug || 'home');
  if (!page || slug == 'home') notFound();

  return (
    <PageWrapper>
      <LivePreview />
      {page.title}
      <RenderBlocks blocks={page.layout} />
    </PageWrapper>
  );
}
