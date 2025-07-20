import { Loader, type LucideProps } from 'lucide-react';
import { cn } from '@/lib/ui';

function LoadingIcon({ className, ...rest }: LucideProps) {
  return <Loader className={cn('animate-spin', className)} {...rest} />;
}

export { LoadingIcon };
