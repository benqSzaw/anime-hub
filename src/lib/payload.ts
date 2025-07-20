import { CollectionSlug, getPayload } from 'payload';
import configPromise from '@payload-config';

async function getPayloadInstance() {
  return await getPayload({ config: configPromise });
}

async function getAllDocuments(collection: CollectionSlug, depth = 2) {
  const payload = await getPayloadInstance();

  const pages = await payload.find({
    collection,
    depth,
  });

  return pages.docs;
}

async function getDocument(
  collection: CollectionSlug,
  slug: string,
  depth = 2,
) {
  const payload = await getPayloadInstance();

  const page = await payload.find({
    collection,
    depth,
    where: {
      slug: {
        equals: slug,
      },
    },
    pagination: false,
    limit: 1,
  });

  return page.docs[0];
}
