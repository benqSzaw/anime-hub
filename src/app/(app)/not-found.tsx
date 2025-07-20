import { PageWrapper } from '@/components/ui/page-wrapper';
import { Container } from '@/components/ui/container';
import Link from 'next/link';

export default function NotFoundPage() {
  return (
    <PageWrapper>
      <Container>
        <h1>Page not found</h1>
        <Link href="/">Return to home</Link>
      </Container>
    </PageWrapper>
  );
}
