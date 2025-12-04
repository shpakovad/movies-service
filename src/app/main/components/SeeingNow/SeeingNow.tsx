'use client';

import { Carousel } from 'antd';
import { Movie } from '@/types/movie.interface';
import { getYearFromString } from '@/lib/utils/dateUtils';
import MovieCard from '@/app/components/ui/MovieCard/MovieCard';

import './SeeingNow.scss';

interface Props {
  movies: Movie[];
}
export default function SeeingNow({ movies }: Props) {
  return (
    <Carousel effect="fade" autoplay={{ dotDuration: true }}>
      {movies.map((item) => {
        const movieYear = getYearFromString(item.premiered);

        return <MovieCard movie={item} movieYear={movieYear} />;
      })}
    </Carousel>
  );
}
