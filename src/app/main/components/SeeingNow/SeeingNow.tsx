'use client';

import { Carousel } from 'antd';
import { Movie } from '@/types/movie.interface';
import MovieCard from '@/app/components/ui/MovieCard/MovieCard';

import './SeeingNow.scss';

interface Props {
  data: Movie[];
}

export default function SeeingNow({ data }: Props) {
  return (
    <Carousel effect="fade" autoplay={{ dotDuration: true }} className="seeing-now-container">
      {data.map((item) => {
        return <MovieCard movie={item} posterSize={{ width: 210, height: 295 }} />;
      })}
    </Carousel>
  );
}
