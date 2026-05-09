'use client';

import { useLinkStatus } from 'next/link';

type Props = {
  idle?: React.ReactNode;
};

export default function CtaPendingHint({ idle = '→' }: Props) {
  const { pending } = useLinkStatus();
  return (
    <span
      aria-hidden
      className="relative inline-flex items-center justify-center w-4 h-4 leading-none"
    >
      <span
        className={`absolute inset-0 flex items-center justify-center transition-opacity duration-100 ${
          pending ? 'opacity-0' : 'opacity-100'
        }`}
      >
        {idle}
      </span>
      <span
        className={`absolute inset-0 flex items-center justify-center transition-opacity duration-100 ${
          pending ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <span className="block w-3.5 h-3.5 rounded-full border-2 border-current border-r-transparent animate-spin" />
      </span>
    </span>
  );
}
