'use client';

import { useLinkStatus } from 'next/link';

type Props = {
  idle?: React.ReactNode;
};

export default function CtaPendingHint({ idle = '→' }: Props) {
  const { pending } = useLinkStatus();
  return (
    <span
      role={pending ? 'status' : undefined}
      aria-live={pending ? 'polite' : undefined}
      aria-label={pending ? 'Loading' : undefined}
      data-pending={pending ? 'true' : 'false'}
      className="relative inline-flex items-center justify-center leading-none"
    >
      <span
        aria-hidden
        className={`inline-flex items-center justify-center w-4 h-4 transition-opacity duration-100 ${
          pending ? 'opacity-0 absolute inset-y-0 right-0' : 'opacity-100'
        }`}
      >
        {idle}
      </span>
      <span
        aria-hidden
        className={`inline-flex items-center gap-1.5 transition-opacity duration-100 ${
          pending ? 'opacity-100' : 'opacity-0 absolute inset-y-0 right-0 w-4'
        }`}
      >
        <span className="block w-3.5 h-3.5 rounded-full border-2 border-current border-r-transparent animate-spin" />
        {pending ? <span className="text-sm font-semibold">Loading…</span> : null}
      </span>
    </span>
  );
}
