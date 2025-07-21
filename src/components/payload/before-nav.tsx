import Link from 'next/link';

function BeforeNav() {
  return (
    <Link className="before-nav" href="/" target="_blank">
      Go to website
    </Link>
  );
}

export default BeforeNav;
