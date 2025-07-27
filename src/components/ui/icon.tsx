import Image from 'next/image';
import IconImg from '@/../public/logo-circle.png';

async function Icon() {
  return <Image src={IconImg} alt="Logo circle" width="32" height="32" />;
}

export default Icon;
