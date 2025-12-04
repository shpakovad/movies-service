'use client';

import { Button, Image } from 'antd';
import { CaretRightOutlined, DashOutlined } from '@ant-design/icons';
import LinkButton from '@/app/components/ui/LinkButton/LinkButton';
import { Movie } from '@/types/movie.interface';

import './MovieCard.scss';

interface Props {
  movieYear: number;
  movie: Movie;
  containerStyle?: object;
  canWatch?: boolean;
}
export default function MovieCard({
  movie,
  movieYear,
  containerStyle = {},
  canWatch = true,
}: Props) {
  const { name, url, image, genres, network, id } = movie;

  return (
    <div key={name} className="movie-card-container" style={containerStyle}>
      <Image src={image.medium} alt="poster" preview={false} className="poster" />

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
