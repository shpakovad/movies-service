'use client';

import { Button } from 'antd';
import Image from 'next/image';
import { CaretRightOutlined, DashOutlined } from '@ant-design/icons';
import LinkButton from '@/app/components/ui/LinkButton/LinkButton';
import { Movie } from '@/types/movie.interface';
import noImage from '@/assets/images/no-image.png';

import './MovieCard.scss';

interface Props {
  movieYear: number;
  movie: Movie;
  containerStyle?: object;
  canWatch?: boolean;
  posterSize?: { width: number; height: number };
}
export default function MovieCard({
  movie,
  movieYear,
  containerStyle = {},
  canWatch = true,
  posterSize,
}: Props) {
  const { name, url, image, genres, network, id } = movie;

  return (
    <div key={name} className="movie-card-container" style={containerStyle}>
      {posterSize && (
        <Image
          src={image.medium || noImage}
          alt="poster"
          className="poster"
          {...posterSize}
          loading="eager"
        />
      )}

      <div className="description">
        <div className="name">{name}</div>

        <div className="year-country">
          {movieYear}
          {network?.country && <span>, {network.country.name}</span>}
        </div>

        <div className="genres">
          {genres.map((item, index) => (
            <span key={`${name}-${item}`}>
              <span>{item}</span>
              {index < genres.length - 1 && ' • '}
            </span>
          ))}
        </div>
        <div>
          {canWatch && (
            <LinkButton
              href={url}
              isNewWindow
              children={
                <Button type="primary" icon={<CaretRightOutlined />}>
                  Watch now
                </Button>
              }
            />
          )}
          <LinkButton
            href={`/movies/${id}`}
            className="show-more-btn"
            children={
              <Button type="primary" icon={<DashOutlined />}>
                Show more
              </Button>
            }
          />
        </div>
      </div>
    </div>
  );
}
