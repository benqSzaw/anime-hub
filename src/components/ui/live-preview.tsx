'use client';
import React from 'react';
import { useRouter } from 'next/navigation.js';
import { RefreshRouteOnSave as PayloadLivePreview } from '@payloadcms/live-preview-react';
import { getClientURL } from '@/lib/utils';

function LivePreview() {
  const router = useRouter();

  return (
    <PayloadLivePreview
      refresh={() => router.refresh()}
      serverURL={getClientURL()}
    />
  );
}

export { LivePreview };
