'use client';

import Image from 'next/image';
import { Movie } from '@/types/movie.interface';
import noImage from '@/assets/images/no-image.png';
import { MovieDescription } from '@/app/components/ui/MovieDescription/MovieDescription';

import './MovieCard.scss';

interface Props {
  movie: Movie;
  canWatch?: boolean;
  posterSize?: { width: number; height: number };
}
export default function MovieCard({ movie, canWatch = true, posterSize }: Props) {
  const { name, image } = movie;

  return (
    <div key={name} className="movie-card-container">
      {image?.original && (
        <Image
          src={image.original}
          alt={`${name} background`}
          fill
          quality={75}
          className="bg-image"
          sizes="60vw"
          priority={false}
          loading="lazy"
        />
      )}

      <div className="overlay" />

      {posterSize && (
        <Image
          src={image.medium || noImage}
          alt="poster"
          className="poster"
          {...posterSize}
          loading="lazy"
        />
      )}

      <MovieDescription movie={movie} canWatch={canWatch} />
    </div>
  );
}
