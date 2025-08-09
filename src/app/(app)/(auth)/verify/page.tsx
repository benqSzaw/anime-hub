import Link from 'next/link';
import { AuthContainer } from '@/components/auth/auth-container';
import { Button } from '@/components/ui/button';
import { notFound } from 'next/navigation';
import { verifyAction } from '@/lib/auth-actions';

export default async function VerifyPage({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const token = (await searchParams).t;
  if (!token || typeof token !== 'string') notFound();
  const { success } = await verifyAction(token);
  if (!success) notFound();

  return (
    <AuthContainer
      title="Thanks for signing up!"
      description="You can now log in to your account."
    >
      <Button className="w-full" asChild>
        <Link href="/login">Go to Login</Link>
      </Button>
    </AuthContainer>
  );
}
