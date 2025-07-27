import Image from 'next/image';
import LogoImg from '@/../public/logo-rectangle.png';

type Props = {
  className?: string;
};

function Logo({ className }: Props) {
  return (
    <Image
      src={LogoImg}
      alt="Logo"
      placeholder="blur"
      className={className || undefined}
    />
  );
}

export default Logo;
