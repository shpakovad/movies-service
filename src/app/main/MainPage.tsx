'use client';

import { useGetMoviesByIdsQuery } from '@/lib/api/tvmazeApi';
import { SEEING_NOW_MOVIES } from '@/constants/constants';
import SeeingNow from '@/app/main/components/SeeingNow';
import Loading from '@/app/components/ui/Loading/Loading';

import './MainPage.scss';

export default function MainPage() {
  const { data, isLoading, error } = useGetMoviesByIdsQuery(SEEING_NOW_MOVIES);

  return (
    <div className="main-container">
      {isLoading ? (
        <Loading />
      ) : error || !data ? (
        <span>Something went wrong...</span>
      ) : (
        <SeeingNow movies={data} />
      )}
    </div>
  );
}
