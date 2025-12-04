'use client';

import { Carousel } from 'antd';
import { Movie } from '@/types/movie.interface';
import { getYearFromString } from '@/lib/utils/dateUtils';
import MovieCard from '@/app/components/ui/MovieCard/MovieCard';

import './SeeingNow.scss';

interface Props {
  data: Movie[];
}
export default function SeeingNow({ data }: Props) {
  return (
    <Carousel effect="fade" autoplay={{ dotDuration: true }} className="seeing-now-container">
      {data.map((item) => {
        const movieYear = getYearFromString(item.premiered);

        return (
          <MovieCard
            movie={item}
            movieYear={movieYear}
            containerStyle={{ backgroundImage: `url(${item.image.original})` }}
          />
        );
      })}
    </Carousel>
  );
}
