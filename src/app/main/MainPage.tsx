'use client';

import { useGetMovieByIdQuery } from '@/lib/api/tvmazeApi';
import { SEEING_NOW_MOVIES } from '@/constants/constants';
import SeeingNow from '@/app/main/components/SeeingNow';
import Loading from '@/app/components/ui/Loading/Loading';
import './MainPage.scss';


export default function MainPage() {
  const { data, error, isLoading } = useGetMovieByIdQuery(SEEING_NOW_MOVIES[0]);

  return (
    <div className="main-container">
      {isLoading ? (
        <Loading />
      ) : error || !data ? (
        <span>Something went wrong...</span>
      ) : (
        <SeeingNow movie={data} />
      )}
    </div>
  );
}
