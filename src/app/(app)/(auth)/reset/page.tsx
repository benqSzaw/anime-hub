import { AuthContainer } from '@/components/auth/auth-container';
import { ResetForm } from '@/components/auth/reset-form';

export default function ResetPage() {
  return (
    <AuthContainer title="Reset Password">
      <ResetForm />
    </AuthContainer>
  );
}
