'use client';

import React from 'react';

import { Flex, Spin } from 'antd';

export function Loading() {
  return (
    <Flex align="center" gap="middle">
      <Spin size="large" fullscreen />
    </Flex>
  );
}

export default Loading;
