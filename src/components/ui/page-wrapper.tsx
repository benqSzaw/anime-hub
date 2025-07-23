import { cn } from '@/lib/ui';
import { ComponentProps, ReactNode } from 'react';

type Props = {
  children?: ReactNode;
} & ComponentProps<'main'>;

function PageWrapper(props: Props) {
  const { className, children, ...rest } = props;
  return (
    <main className={cn('space-y-10 py-8', className)} {...rest}>
      {children}
    </main>
  );
}

export { PageWrapper };
