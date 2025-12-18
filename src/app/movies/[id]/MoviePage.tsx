'use client';

import { useParams } from 'next/navigation';
import Image from 'next/image';
import { CaretRightOutlined } from '@ant-design/icons';
import { Button, Rate } from 'antd';
import noImage from '@/assets/images/no-image.png';
import { useGetMovieByIdQuery, useGetMovieCastQuery } from '@/lib/api/tvmazeApi';
import LinkButton from '@/app/components/ui/LinkButton/LinkButton';
import { getYearFromString } from '@/lib/utils/dateUtils';
import { Cast } from '@/types/movie.interface';
import ErrorPage from '@/app/components/ui/Error/ErrorPage';
import Loading from '@/app/components/ui/Loading/Loading';

import './MoviePage.scss';

export default function MoviePage() {
  const { id: movieId } = useParams<{ id: string }>();

  const {
    data: movieData,
    isError: movieError,
    isLoading: isMovieLoading,
  } = useGetMovieByIdQuery(movieId, { skip: !movieId });
  const { data: catsData } = useGetMovieCastQuery(movieId, { skip: !movieId });

  if (!movieData) return null;

  const { name, image, rating, premiered, genres, network, summary, url } = movieData;

  const movieYear = getYearFromString(premiered);
  const ratingOutOf5 = rating.average ? rating.average / 2 : 0;

  return movieError ? (
    <ErrorPage />
  ) : isMovieLoading ? (
    <Loading />
  ) : (
    <div className="movie-container">
      <section className="hero-wrapper">
        {image?.original ? (
          <Image
            src={image?.original}
            alt={name}
            className="hero-image"
            fill={true}
            sizes="(max-width: 616px) 100vw, 33vw"
            loading="eager"
          />
        ) : (
          <Image
            src={noImage.src}
            alt={name}
            fill={true}
            sizes="(max-width: 616px) 100vw, 33vw"
            loading="eager"
          />
        )}

        <div className="overlay" />

        <div className="hero-content">
          <h1 className="title">{name}</h1>
          <h2 className="subtitle">
            {movieYear}
            {network?.country && <span>, {network.country.name}</span>}
          </h2>

          <div className="divider" />
          <div className="dividers-content">
            <div>
              <Rate className="rating" allowHalf value={ratingOutOf5} disabled />
              <span className="rating-title">{rating.average || 0}</span>
            </div>
            <div className="details">
              {genres.map((item: string[], index: number) => (
                <span key={`${name}-${item}`}>
                  <span>{item}</span>
                  {index < genres.length - 1 && ' • '}
                </span>
              ))}
            </div>
          </div>
          <div className="divider" />
          <p className="description" dangerouslySetInnerHTML={{ __html: summary }} />
          {catsData && catsData.length > 0 && (
            <div className="starring">
              <b>
                <span>Starring: </span>
              </b>
              {catsData.map((item: Cast, index: number) => {
                const person = item.person.name;
                return (
                  <span key={`${item.person.id}-${item.character.id}`}>
                    {person}
                    {index < catsData.length - 1 && ', '}
                  </span>
                );
              })}
            </div>
          )}
          {url && (
            <LinkButton
              href={url}
              isNewWindow
              className="watch-btn"
              children={<Button icon={<CaretRightOutlined />}>Watch now</Button>}
            />
          )}
        </div>
      </section>
    </div>
  );
}
