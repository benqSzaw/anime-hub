import { getPayloadInstance } from '@/lib/payload';
import { Container } from '@/components/ui/container';
import { CmsLink } from '@/components/ui/cms-link';
import { CmsIcon } from '@/components/ui/cms-icon';
import { IconValue } from '@/fields/icon/icons';
import { Button } from '@/components/ui/button';
import { ExternalLink } from '@/components/ui/external-link';

async function Footer() {
  const payload = await getPayloadInstance();
  const settings = await payload.findGlobal({ slug: 'settings', depth: 2 });
  const footer = await payload.findGlobal({ slug: 'footer', depth: 2 });

  return (
    <footer className="space-y-4 border-t py-4">
      {settings.socials && settings.socials.length > 0 && (
        <Container size="sm">
          <ul className="flex flex-wrap items-center justify-center gap-4">
            {settings.socials.map(item => (
              <li key={item.id}>
                <Button
                  variant="outline"
                  size="icon"
                  aria-label={item.link}
                  asChild
                >
                  <ExternalLink href={item.link}>
                    <CmsIcon icon={item.icon as IconValue} />
                  </ExternalLink>
                </Button>
              </li>
            ))}
          </ul>
        </Container>
      )}
      {footer.links && footer.links.length > 0 && (
        <Container size="sm">
          <ul className="flex flex-wrap items-center justify-center gap-4">
            {footer.links.map(item => (
              <li key={item.id}>
                <CmsLink
                  {...item.link}
                  className="underline decoration-1 underline-offset-3"
                />
              </li>
            ))}
          </ul>
        </Container>
      )}
      <Container size="sm">
        <p className="text-muted-foreground text-center text-sm">
          {footer.text}
        </p>
      </Container>
    </footer>
  );
}
export { Footer };
