'use client';

import { Pagination } from 'antd';
import { useGetMoviesListQuery } from '@/lib/api/tvmazeApi';
import Loading from '@/app/components/ui/Loading/Loading';
import ErrorPage from '@/app/components/ui/Error/ErrorPage';
import VirtualisedGridList from '@/app/components/ui/VirtualisedGridList/VirtualisedGridList';

import './MoviesPage.scss';

export const MoviesPage = () => {
  const { data, isLoading, error } = useGetMoviesListQuery(1);

  return isLoading ? (
    <Loading />
  ) : error || !data ? (
    <ErrorPage />
  ) : (
    <>
      <VirtualisedGridList windowData={data} className="movies-list" />
      <Pagination defaultCurrent={6} total={500} showSizeChanger={false} />
    </>
  );
};

export default MoviesPage;
