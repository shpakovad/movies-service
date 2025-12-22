'use client';

import { useMemo } from 'react';

import { useSearchParams } from 'next/navigation';

import Loading from '@/app/components/ui/Loading/Loading';
import { StatusPage } from '@/app/components/ui/StatusPage/StatusPage';
import VirtualisedGridList from '@/app/components/ui/VirtualisedGridList/VirtualisedGridList';

import { useGetQueryItemsQuery } from '@/lib/api/tvmazeApi';

import { Movie } from '@/types/movie.interface';

import '../MoviesPage.scss';

export const ResultSearchingPage = () => {
  const searchParams = useSearchParams();
  const query = useMemo(() => searchParams.get('q'), [searchParams]);

  const { data, isLoading, error } = useGetQueryItemsQuery(query as string, {
    skip: !query || query.length === 0,
  });
  const isData = !isLoading && !error && data.length > 0;
  return isLoading ? (
    <Loading />
  ) : error || !isData ? (
    <StatusPage {...(!isData && { type: 'no-results' })} />
  ) : (
    <VirtualisedGridList
      windowData={data.map((item: Movie) => item.show)}
      className="movies-list"
    />
  );
};

export default ResultSearchingPage;
