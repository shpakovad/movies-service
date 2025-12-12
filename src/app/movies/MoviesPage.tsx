'use client';

import { useMemo } from 'react';
import { Button, Pagination } from 'antd';
import { DownOutlined, UpOutlined } from '@ant-design/icons';
import { useGetMoviesListQuery } from '@/lib/api/tvmazeApi';
import Loading from '@/app/components/ui/Loading/Loading';
import ErrorPage from '@/app/components/ui/Error/ErrorPage';
import VirtualisedGridList from '@/app/components/ui/VirtualisedGridList/VirtualisedGridList';
import { useScrollDirection } from '@/lib/hooks/useScrollDirection';

import './MoviesPage.scss';

export const MoviesPage = () => {
  const { isAtBottom, bottomRef } = useScrollDirection();

  const { data, isLoading, error } = useGetMoviesListQuery(1);

  const buttonIcon = useMemo(() => (isAtBottom ? <UpOutlined /> : <DownOutlined />), [isAtBottom]);

  const handleScrollClick = () => {
    if (isAtBottom) {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    } else {
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
    }
  };

  return isLoading ? (
    <Loading />
  ) : error || !data ? (
    <ErrorPage />
  ) : (
    <>
      <Button className="scroll-btn" onClick={handleScrollClick} icon={buttonIcon} />
      <VirtualisedGridList windowData={data} className="movies-list" />
      <Pagination defaultCurrent={6} total={500} showSizeChanger={false} />
      <div ref={bottomRef} />
    </>
  );
};

export default MoviesPage;
