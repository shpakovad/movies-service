'use client';

import { ReactNode } from 'react';
import Link from 'next/link';

interface Props {
  href: string;
  className?: string;
  children: string | ReactNode;
  isNewWindow?: boolean;
}

export function LinkButton(props: Props) {
  const { href, className = '', children, isNewWindow = false } = props;
  return (
    <Link
      href={href}
      className={className}
      {...(isNewWindow && {
        target: '_blank',
      })}
    >
      {children}
    </Link>
  );
}

export default LinkButton;
