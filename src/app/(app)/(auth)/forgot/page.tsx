import { AuthContainer } from '@/components/auth/auth-container';
import Link from 'next/link';
import { ForgotForm } from '@/components/auth/forgot-form';

export default function ForgotPage() {
  return (
    <AuthContainer
      title="Forgot Password"
      description="Please enter your email below. You will receive an email message with instructions on how to reset your password."
      footer={
        <Link href="/login" className="decorated-link">
          Back to login
        </Link>
      }
    >
      <ForgotForm />
    </AuthContainer>
  );
}
