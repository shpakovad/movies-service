'use client';

import { useGetMoviesByIdsQuery } from '@/lib/api/tvmazeApi';
import { SEEING_NOW_MOVIES, TRADING_SERIES } from '@/constants/constants';
import SeeingNow from '@/app/main/components/SeeingNow/SeeingNow';
import Trending from '@/app/main/components/Trending/Trending';
import Loading from '@/app/components/ui/Loading/Loading';

import './MainPage.scss';

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
          <SeeingNow data={movies} />
          <Trending data={series} />
        </>
      )}
    </div>
  );
}
