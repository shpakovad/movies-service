'use client';

import LinkButton from '@/app/components/ui/LinkButton/LinkButton';
import { Button } from 'antd';
import { CaretRightOutlined, DashOutlined } from '@ant-design/icons';
import { Movie } from '@/types/movie.interface';
import { getYearFromString } from '@/lib/utils/dateUtils';

interface Props {
  movie: Movie;
  canWatch?: boolean;
  withGenres?: boolean;
}

export const MovieDescription = ({ movie, canWatch = true, withGenres = true }: Props) => {
  const { name, url, genres, network, id, premiered } = movie;
  const movieYear = getYearFromString(premiered);

  return (
    <div className="description">
      <div className="name">{name}</div>

      <div className="year-country">
        {movieYear}
        {network?.country && <span>, {network.country.name}</span>}
      </div>

      {withGenres && (
        <div className="genres">
          {genres.map((item, index) => (
            <span key={`${name}-${item}`}>
              <span>{item}</span>
              {index < genres.length - 1 && ' • '}
            </span>
          ))}
        </div>
      )}

      <div>
        {canWatch && (
          <LinkButton
            href={url}
            isNewWindow
            children={
              <Button className="action-btn" icon={<CaretRightOutlined />}>
                Watch now
              </Button>
            }
          />
        )}
        <LinkButton
          href={`/movies/${id}`}
          className="show-more-btn"
          children={
            <Button type="primary" className="action-btn" icon={<DashOutlined />}>
              Show more
            </Button>
          }
        />
      </div>
    </div>
  );
};
