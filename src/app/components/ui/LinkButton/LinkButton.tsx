'use client';

import { ReactNode } from 'react';

import Link from 'next/link';

import './LinkButton.scss';

interface Props {
  href: string;
  className?: string;
  children: string | ReactNode;
  isNewWindow?: boolean;
}

export function LinkButton(props: Props) {
  const { href, className = '', children, isNewWindow = false } = props;

  const containerClassName = ['link-container', className].filter(Boolean).join(' ');

  return (
    <Link
      href={href}
      className={containerClassName}
      {...(isNewWindow && {
        target: '_blank',
      })}
    >
      {children}
    </Link>
  );
}

export default LinkButton;
