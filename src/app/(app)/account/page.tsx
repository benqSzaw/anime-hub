import { PageWrapper } from '@/components/ui/page-wrapper';
import { Container } from '@/components/ui/container';
import { authenticateUser } from '@/lib/auth-actions';
import { redirect } from 'next/navigation';

export default async function AccountPage() {
  const isAuthenticated = await authenticateUser();
  if (!isAuthenticated) redirect('/login');

  return (
    <PageWrapper>
      <Container>account</Container>
    </PageWrapper>
  );
}
