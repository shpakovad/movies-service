'use client';

import { useCallback } from 'react';

import { usePathname } from 'next/navigation';

import LinkButton from '@/app/components/ui/LinkButton/LinkButton';
import SearchInput from '@/app/components/ui/SearchInput/SearchInput';

import { HEADER_ITEMS } from '@/constants/constants';

import './HeaderContainer.scss';

export const HeaderPage = () => {
  const pathname = usePathname();
  const activeLink = useCallback((path: string) => pathname === path, [pathname]);

  return (
    <div className="header-container">
      <nav>
        {HEADER_ITEMS.map((item) => (
          <LinkButton
            key={item.name}
            href={item.href}
            className={activeLink(item.href) ? 'active' : ''}
            children={item.name}
          />
        ))}
      </nav>
      <SearchInput />
    </div>
  );
};

export default HeaderPage;
