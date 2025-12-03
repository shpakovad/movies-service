'use client';

import { ReactNode } from 'react';
import Link from 'next/link';

interface Props {
  href: string;
  className?: string;
  children: string | ReactNode;
}

export function LinkButton(props: Props) {
  const { href, className = '', children } = props;
  return (
    <Link href={href} className={className}>
      {children}
    </Link>
  );
}

export default LinkButton;
