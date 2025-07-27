import { ReactNode } from 'react';
import { PageWrapper } from '@/components/ui/page-wrapper';
import { Container } from '@/components/ui/container';

type Props = {
  children: Readonly<ReactNode>;
};

export default function AuthLayout({ children }: Props) {
  return (
    <PageWrapper className="min-h-screen-header flex-center">
      <Container className="w-full" size="xs">
        {children}
      </Container>
    </PageWrapper>
  );
}
