'use client';

import '@ant-design/v5-patch-for-react-19';
import { ConfigProvider } from 'antd';
import { StyleProvider } from '@ant-design/cssinjs';
import { AntdRegistry } from '@ant-design/nextjs-registry';
import { ReactNode } from 'react';

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
        >{children}
        </ConfigProvider>
      </StyleProvider>
    </AntdRegistry>
  );
}
