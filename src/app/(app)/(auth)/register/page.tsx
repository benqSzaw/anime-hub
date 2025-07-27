import Link from 'next/link';
import { AuthContainer } from '@/components/auth/auth-container';
import { RegisterForm } from '@/components/auth/register-form';

export default function LoginPage() {
  return (
    <AuthContainer
      title="Create new account"
      footer={
        <div>
          <p>Already have an account? </p>
          <Link href="/login" className="decorated-link">
            Login
          </Link>
        </div>
      }
    >
      <RegisterForm />
    </AuthContainer>
  );
}
