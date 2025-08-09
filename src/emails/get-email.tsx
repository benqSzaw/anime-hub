import { pretty, render } from '@react-email/render';
import VerifyEmail from '@/emails/verify-email';
import { ReactNode } from 'react';
import ResetPassEmail from '@/emails/reset-pass-email';

const pettyRender = async (email: ReactNode) =>
  await pretty(await render(email));

export async function renderVerifyEmail(username: string, token: string) {
  return await pettyRender(<VerifyEmail username={username} token={token} />);
}

export async function renderResetPassEmail(username: string, token: string) {
  return await pettyRender(
    <ResetPassEmail username={username} token={token} />,
  );
}
