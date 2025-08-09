import { notFound } from 'next/navigation';
import { AuthContainer } from '@/components/auth/auth-container';
import { ResetForm } from '@/components/auth/reset-form';

export default async function ResetPage({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const token = (await searchParams).t;
  if (!token || typeof token !== 'string') notFound();
  return (
    <AuthContainer title="Reset Password">
      <ResetForm />
    </AuthContainer>
  );
}
