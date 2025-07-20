import { cn } from '@/lib/ui';
import { ComponentProps, ReactNode } from 'react';

type Props = {
  children?: ReactNode;
  size?: 'xs' | 'sm' | 'md';
} & ComponentProps<'section'>;

function Container(props: Props) {
  const { className, size = 'md', children, ...rest } = props;
  return (
    <section
      className={cn(
        size === 'xs' && 'max-w-2xl',
        size === 'sm' && 'max-w-4xl',
        size === 'md' && 'max-w-6xl',
        'mx-auto px-2 sm:px-4',
        className,
      )}
      {...rest}
    >
      {children}
    </section>
  );
}

export { Container };
