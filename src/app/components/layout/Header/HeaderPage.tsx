'use client';

import { usePathname } from 'next/navigation';
import { HEADER_ITEMS } from '@/constants/constants';
import LinkButton from '@/app/components/ui/LinkButton/LinkButton';
import './HeaderContainer.scss';

export const HeaderPage = () => {
  const pathname = usePathname();
  const activeLink = (path: string) => pathname === path;

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
    </div>
  );
};

export default HeaderPage;
