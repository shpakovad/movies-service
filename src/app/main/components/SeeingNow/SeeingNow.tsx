'use client';

import { useEffect } from 'react';

import { Carousel } from 'antd';

import MovieCard from '@/app/components/ui/MovieCard/MovieCard';

import { Movie } from '@/types/movie.interface';

import './SeeingNow.scss';

interface Props {
  data: Movie[];
}

export default function SeeingNow({ data }: Props) {
  useEffect(() => {
    const dotsContainer = document.querySelector('.carousel-dots');
    if (dotsContainer) {
      const liElements = dotsContainer.querySelectorAll('li');
      liElements.forEach((li, index) => {
        li.style.marginRight = '12px';
      });
    }
  }, []);

  return (
    <Carousel className="seeing-now-container" dots={{ className: 'carousel-dots' }}>
      {data.map((item) => {
        return <MovieCard movie={item} posterSize={{ width: 210, height: 295 }} />;
      })}
    </Carousel>
  );
}
