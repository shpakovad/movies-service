'use client';

import '@ant-design/v5-patch-for-react-19';
import { ReactNode } from 'react';
import { ConfigProvider } from 'antd';
import { StyleProvider } from '@ant-design/cssinjs';
import { AntdRegistry } from '@ant-design/nextjs-registry';

interface Props {
  children: ReactNode;
}
export function AntDesignProviders({ children }: Props) {
  return (
    <AntdRegistry>
      <StyleProvider layer>
        <ConfigProvider
          theme={{
            token: {
              fontFamily: "'Roboto', sans-serif",
            },
          }}
        >
          {children}
        </ConfigProvider>
      </StyleProvider>
    </AntdRegistry>
  );
}
