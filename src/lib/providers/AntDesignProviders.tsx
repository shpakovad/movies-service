'use client';

import '@ant-design/v5-patch-for-react-19';
import { ReactNode } from 'react';
import { ConfigProvider } from 'antd';
import { StyleProvider } from '@ant-design/cssinjs';
import { AntdRegistry } from '@ant-design/nextjs-registry';
import { theme } from '@/lib/styles/theme/themeConfig';

interface Props {
  children: ReactNode;
}
export function AntDesignProviders({ children }: Props) {
  return (
    <AntdRegistry>
      <StyleProvider layer hashPriority="high" ssrInline>
        <ConfigProvider theme={theme}>{children}</ConfigProvider>
      </StyleProvider>
    </AntdRegistry>
  );
}
