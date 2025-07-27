import Link from 'next/link';
import { LoginForm } from '@/components/auth/login-form';
import { AuthContainer } from '@/components/auth/auth-container';

export default function LoginPage() {
  return (
    <AuthContainer
      title="Login to your account"
      footer={
        <div>
          <p>Don&#39;t have an account? </p>
          <Link href="/register" className="decorated-link">
            Sign up
          </Link>
        </div>
      }
    >
      <LoginForm />
    </AuthContainer>
  );
}
