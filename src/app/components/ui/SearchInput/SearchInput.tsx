'use client';

import { Button, Input, Space } from 'antd';
import { SearchOutlined } from '@ant-design/icons';

import './SearchInput.scss';

export const SearchInput = () => {
  return (
    <nav className="search-container">
      <Space.Compact style={{ width: '100%' }}>
        <Input name="search" placeholder="type to search" onChange={() => {}} />
        <Button type="primary" icon={<SearchOutlined />} onClick={() => {}} />
      </Space.Compact>
    </nav>
  );
};

export default SearchInput;
