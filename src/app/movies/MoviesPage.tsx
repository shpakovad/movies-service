'use client';
import { Card } from 'antd';
import Image from 'next/image';
import { useGetMoviesListQuery } from '@/lib/api/tvmazeApi';
import Loading from '@/app/components/ui/Loading/Loading';
import ErrorPage from '@/app/components/ui/Error/ErrorPage';
import { Movie } from '@/types/movie.interface';
import noImage from '@/assets/images/no-image.png';
import { MovieDescription } from '@/app/components/ui/MovieDescription/MovieDescription';

import './MoviesPage.scss';

export const MoviesPage = () => {
  const { data, isLoading, error } = useGetMoviesListQuery(1);

  return isLoading ? (
    <Loading />
  ) : error || !data ? (
    <ErrorPage />
  ) : (
    <div className="movies-list">
      {data.map((item: Movie) => {
        const { id, image, name } = item;
        return (
          <Card
            key={id}
            hoverable
            style={{ width: 240, height: 340 }}
            cover={
              <Image
                draggable={false}
                alt={name}
                src={image.medium || noImage}
                width={200}
                height={300}
                loading="eager"
              />
            }
          >
            <div className="overlay" />
            <MovieDescription movie={item} canWatch={false} withGenres={false} />
          </Card>
        );
      })}
    </div>
  );
};

export default MoviesPage;
