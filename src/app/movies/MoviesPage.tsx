'use client';

import { useEffect, useMemo, useState } from 'react';

import { Button, Pagination } from 'antd';

import { DownOutlined, UpOutlined } from '@ant-design/icons';

import Loading from '@/app/components/ui/Loading/Loading';
import { StatusPage } from '@/app/components/ui/StatusPage/StatusPage';
import VirtualisedGridList from '@/app/components/ui/VirtualisedGridList/VirtualisedGridList';

import { useGetMoviesListQuery } from '@/lib/api/tvmazeApi';
import { useQueryState } from '@/lib/hooks/useQueryState';
import { useScrollDirection } from '@/lib/hooks/useScrollDirection';

import './MoviesPage.scss';

export const MoviesPage = () => {
  const [page, setPage] = useState(1);

  const { isAtBottom, bottomRef } = useScrollDirection();
  const { currentValue, setUrlParam } = useQueryState('page', page);

  const { data, isLoading, error } = useGetMoviesListQuery(page);

  const buttonIcon = useMemo(() => (isAtBottom ? <UpOutlined /> : <DownOutlined />), [isAtBottom]);

  const handleScrollClick = () => {
    const scrollHeight = Math.max(
      document.body.scrollHeight,
      document.documentElement.scrollHeight,
      document.body.offsetHeight,
      document.documentElement.offsetHeight,
      document.body.clientHeight,
      document.documentElement.clientHeight
    );

    window.scrollTo({
      top: scrollHeight,
      behavior: 'smooth',
    });
  };

  const onChangePage = (page: number) => {
    setPage(page);
    setUrlParam(page);
  };

  useEffect(() => {
    if (currentValue !== page) {
      setPage(currentValue);
    }
  }, []);

  return isLoading ? (
    <Loading />
  ) : error || !data ? (
    <StatusPage />
  ) : (
    <>
      {!isAtBottom && (
        <Button
          classNames={{
            root: 'scroll-btn',
            icon: 'scroll-icon',
          }}
          styles={{
            root: {
              color: '#8a8a8a',
              border: '1px solid #8a8a8a',
              background: 'none',
            },
          }}
          onClick={handleScrollClick}
          icon={buttonIcon}
        />
      )}
      <VirtualisedGridList windowData={data} className="movies-list" />
      <Pagination
        className="pagination"
        defaultCurrent={page}
        total={350}
        showSizeChanger={false}
        onChange={onChangePage}
      />
      <div ref={bottomRef} />
    </>
  );
};

export default MoviesPage;
