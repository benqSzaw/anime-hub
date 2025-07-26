import { getPayloadInstance } from '@/lib/payload';
import { Container } from '@/components/ui/container';
import { CmsLink } from '@/components/ui/cms-link';

async function Footer() {
  const payload = await getPayloadInstance();
  const footer = await payload.findGlobal({ slug: 'footer', depth: 2 });

  return (
    <footer className="space-y-4 border-t py-4">
      {footer.links && (
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
