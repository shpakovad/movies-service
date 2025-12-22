import { Suspense } from 'react';

import ResultSearchingPage from '@/app/movies/search/ResultSearchingPage';

export default function SearchMovies() {
  return (
    <Suspense>
      <ResultSearchingPage />
    </Suspense>
  );
}
