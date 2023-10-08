'use client';

import { AudioDetail } from '@/components/modules/AudioDetail/AudioDetail';

export default function AudioDetailPage(context: any) {
  const id = context.params.slug as string;

  return (
    <main className="h-full p-24 main-wrapper">
      <AudioDetail id={id} />
    </main>
  );
}
