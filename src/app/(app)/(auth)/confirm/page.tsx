import { AuthContainer } from '@/components/auth/auth-container';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function ConfirmPage() {
  return (
    <AuthContainer
      title="Please confirm your account"
      description="We have sent a confirmation email to your registered email address. Please check your inbox and follow the instructions to confirm your account."
    >
      <Button className="w-full" asChild>
        <Link href="/login">Go to Login</Link>
      </Button>
    </AuthContainer>
  );
}
