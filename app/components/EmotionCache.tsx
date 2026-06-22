'use client';

import * as React from 'react';
import createCache from '@emotion/cache';
import { CacheProvider } from '@emotion/react';
import { useServerInsertedHTML } from 'next/navigation';

export default function EmotionCache({ children }: { children: React.ReactNode }) {
  const [registry] = React.useState(() => {
    const cache = createCache({ key: 'css', prepend: true });
    cache.compat = true;
    return cache;
  });

  useServerInsertedHTML(() => {
    return (
      <style
        data-emotion={`${registry.key} ${Object.keys(registry.inserted).join(' ')}`}
        dangerouslySetInnerHTML={{
          __html: Object.values(registry.inserted).join(' '),
        }}
      />
    );
  });

  return <CacheProvider value={registry}>{children}</CacheProvider>;
}
