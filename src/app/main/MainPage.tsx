'use client';

import dynamic from 'next/dynamic';

import Loading from '@/app/components/ui/Loading/Loading';

import { SEEING_NOW_MOVIES, TRADING_SERIES } from '@/constants/constants';

import { useGetMoviesByIdsQuery } from '@/lib/api/tvmazeApi';

import './MainPage.scss';

const SeeingNowDynamic = dynamic(
  () => import('./components/SeeingNow/SeeingNow').then((mod) => mod.default),
  {
    loading: () => <Loading />,
    ssr: false,
  }
);

const TrendingDynamic = dynamic(
  () => import('./components/Trending/Trending').then((mod) => mod.default),
  {
    loading: () => <Loading />,
    ssr: false,
  }
);

export default function MainPage() {
  const {
    data: movies,
    isLoading: isLoadingMovies,
    error: errorMovies,
  } = useGetMoviesByIdsQuery(SEEING_NOW_MOVIES);
  const {
    data: series,
    isLoading: isLoadingSeries,
    error: errorSeries,
  } = useGetMoviesByIdsQuery(TRADING_SERIES);

  const isLoading = isLoadingMovies || isLoadingSeries;
  const isError = errorMovies || errorSeries;

  return (
    <div className="main-container">
      {isLoading ? (
        <Loading />
      ) : isError || !movies || !series ? (
        <span>Something went wrong...</span>
      ) : (
        <>
          <SeeingNowDynamic data={movies} />
          <TrendingDynamic data={series} />
        </>
      )}
    </div>
  );
}
