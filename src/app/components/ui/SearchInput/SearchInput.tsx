'use client';

import { useCallback, useEffect, useMemo, useState } from 'react';

import { useRouter, useSearchParams } from 'next/navigation';

import { Button, Input, Space } from 'antd';

import { SearchOutlined } from '@ant-design/icons';

import './SearchInput.scss';

export const SearchInput = () => {
  const [searchValue, setSearchValue] = useState<string | null>(null);

  const route = useRouter();
  const searchParams = useSearchParams();

  const query = useMemo(() => searchParams.get('q'), [searchParams]);

  const handleOnInputChange = (value: string) => {
    setSearchValue(value);
  };

  const handleOnSearch = useCallback(() => {
    if (searchValue) {
      route.push(`/movies/search?q=${searchValue}&page=1`);
    }
  }, [searchValue]);

  useEffect(() => {
    if (query) {
      setSearchValue(query);
    }
  }, [query]);

  return (
    <nav className="search-container">
      <Space.Compact style={{ width: '100%' }}>
        <Input
          allowClear
          name="search"
          className="search-input"
          placeholder="type to search"
          value={searchValue || ''}
          onChange={(e) => handleOnInputChange(e.target.value)}
          onPressEnter={handleOnSearch}
        />
        <Button
          type="primary"
          classNames={{
            root: 'search-btn',
          }}
          icon={<SearchOutlined />}
          onClick={handleOnSearch}
        />
      </Space.Compact>
    </nav>
  );
};

export default SearchInput;
