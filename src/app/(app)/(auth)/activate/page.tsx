import Link from 'next/link';
import { AuthContainer } from '@/components/auth/auth-container';
import { Button } from '@/components/ui/button';

export default function ActivatePage() {
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
