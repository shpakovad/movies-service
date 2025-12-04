'use client';

import { Button, Carousel, Image } from 'antd';
import { Movie } from '@/types/movie.interface';
import { getYearFromString } from '@/lib/utils/dateUtils';
import { CaretRightOutlined } from '@ant-design/icons';

import './SeeingNow.scss';

interface Props {
  movies: Movie[];
}
export default function SeeingNow({ movies }: Props) {
  return (
    <Carousel effect="fade" autoplay={{ dotDuration: true }}>
      {movies.map((item) => {
        const { name, url, image, premiered, genres, network } = item;
        const movieYear = getYearFromString(premiered);

        return (
          <div>
            <div
              key={name}
              className="seeing-now-container"
              style={{ backgroundImage: `url(${image.original})` }}
            >
              <Image src={image.medium} alt="poster" preview={false} />

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
                  <a href={url} target="_blank" rel="noopener noreferrer">
                    <Button type="primary" icon={<CaretRightOutlined />}>
                      Watch now
                    </Button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </Carousel>
  );
}
