import Image from 'next/image';
import Logo from '@/../public/logo-circle.png';

function Icon() {
  return (
    <Image
      src={Logo}
      alt="Logo circle"
      width="32"
      height="32"
      placeholder="blur"
    />
  );
}

export default Icon;
