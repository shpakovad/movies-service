'use client';

import { Suspense } from 'react';
import dynamic from 'next/dynamic';
import Loading from '@/app/components/ui/Loading/Loading';

const MoviesPageDynamic = dynamic(() => import('./MoviesPage').then((mod) => mod.MoviesPage), {
  loading: () => <Loading />,
  ssr: false,
});

const Movies = () => {
  return (
    <Suspense>
      <MoviesPageDynamic />
    </Suspense>
  );
};

export default Movies;
