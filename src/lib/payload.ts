import { CollectionSlug, DataFromCollectionSlug, getPayload } from 'payload';
import configPromise from '@payload-config';

async function getPayloadInstance() {
  return await getPayload({ config: configPromise });
}

async function getAllDocuments<T extends CollectionSlug>(
  collection: T,
  depth = 2,
) {
  const payload = await getPayloadInstance();

  const pages = await payload.find({
    collection,
    depth,
  });

  return pages.docs as DataFromCollectionSlug<T>[];
}

async function getDocument<T extends CollectionSlug>(
  collection: T,
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

  return page.docs[0] as DataFromCollectionSlug<T>;
}

const formatPageSlug = (slug: string) => (slug === 'home' ? '' : slug);

export { getPayloadInstance, getAllDocuments, getDocument, formatPageSlug };
