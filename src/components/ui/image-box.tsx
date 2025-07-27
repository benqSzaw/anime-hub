import Image from 'next/image';
import { Media } from '@/payload-types';
import { cn } from '@/lib/ui';

export type ImageBoxProps = {
  media: number | Media | null | undefined;
  width?: number | `${number}`;
  height?: number | `${number}`;
  sizes?: string;
  fill?: boolean;
  loading?: 'lazy' | 'eager';
  className?: string;
};

function ImageBox(props: ImageBoxProps) {
  const {
    media,
    height,
    width,
    className,
    fill = false,
    loading = 'eager',
    ...rest
  } = props;
  const img = media as Media;

  return (
    <Image
      src={img.url as string}
      alt={img.alt}
      width={fill ? undefined : width || (img.width as number)}
      height={fill ? undefined : height || (img.width as number)}
      className={cn(className, 'object-cover object-center')}
      loading={loading}
      fill={fill}
      {...rest}
    />
  );
}

export { ImageBox };
