'use client';

import { Carousel } from 'antd';

import MovieCard from '@/app/components/ui/MovieCard/MovieCard';

import { Movie } from '@/types/movie.interface';

import './SeeingNow.scss';

interface Props {
  data: Movie[];
}

export default function SeeingNow({ data }: Props) {
  return (
    <Carousel className="seeing-now-container">
      {data.map((item) => {
        return <MovieCard movie={item} posterSize={{ width: 210, height: 295 }} />;
      })}
    </Carousel>
  );
}
