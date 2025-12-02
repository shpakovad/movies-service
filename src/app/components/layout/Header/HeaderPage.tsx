'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { HEADER_ITEMS } from '@/constants/constants';
import './HeaderContainer.scss';

export const HeaderPage = () => {
  const pathname = usePathname();
  const activeLink = (path: string) => pathname === path;

  return (
    <div className="header-container">
      <nav>
        {HEADER_ITEMS.map((item) => (
          <Link key={item.name} href={item.href} className={activeLink(item.href) ? 'active' : ''}>
            {item.name}
          </Link>
        ))}
      </nav>
    </div>
  );
};

export default HeaderPage;
