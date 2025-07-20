import Image from 'next/image';
import Logo from '@/../public/logo-rectangle.png';

function Icon() {
  return <Image src={Logo} alt="Logo full" placeholder="blur" />;
}

export default Icon;
