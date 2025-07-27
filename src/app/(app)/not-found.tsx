import { PageWrapper } from '@/components/ui/page-wrapper';
import { Container } from '@/components/ui/container';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function NotFoundPage() {
  return (
    <PageWrapper className="flex-center min-h-screen">
      <Container className="space-y-4 text-center">
        <h1 className="text-4xl">Page not found</h1>
        <Button variant="outline" className="w-full" asChild>
          <Link href="/">Return to home</Link>
        </Button>
      </Container>
    </PageWrapper>
  );
}
