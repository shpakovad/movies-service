'use client';

import { Flex, Spin } from 'antd';

import React from 'react';

export function Loading() {
  return (
    <Flex align="center" gap="middle">
      <Spin size="large" fullscreen />
    </Flex>
  );
}

export default Loading;
