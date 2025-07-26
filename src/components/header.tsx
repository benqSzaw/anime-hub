import Link from 'next/link';
import { Search, User } from 'lucide-react';
import { getPayloadInstance } from '@/lib/payload';
import { CmsLink } from '@/components/ui/cms-link';
import { Button } from '@/components/ui/button';

async function Header() {
  const payload = await getPayloadInstance();
  const header = await payload.findGlobal({ slug: 'header', depth: 2 });

  return (
    <header className="max-w-8xl sticky top-0 flex h-16 w-full items-center justify-between border-b px-5">
      <div className="flex items-center gap-2">
        <p>logo</p>
        {header.links && (
          <nav>
            <ul className="flex items-center gap-4">
              {header.links.map(item => (
                <li key={item.id}>
                  <Button variant="ghost">
                    <CmsLink {...item.link} />
                  </Button>
                </li>
              ))}
            </ul>
          </nav>
        )}
      </div>

      <div className="space-x-2">
        <Button aria-label="Search for anime" size="icon" variant="outline">
          <Search />
        </Button>
        <Button aria-label="Go to account panel" size="icon" asChild>
          <Link href="/account">
            <User />
          </Link>
        </Button>
      </div>
    </header>
  );
}

export { Header };
