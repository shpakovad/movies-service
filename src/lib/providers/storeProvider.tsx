'use client';

import { Provider } from 'react-redux';
import { store } from '@/lib/store/store';
import { ReactNode } from 'react';

export function StoreProvided({ children }: { children: ReactNode }) {
  return <Provider store={store}>{children}</Provider>;
}
