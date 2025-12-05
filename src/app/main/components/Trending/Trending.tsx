'use client';

import { Col, Row } from 'antd';
import { Movie } from '@/types/movie.interface';
import MovieCard from '@/app/components/ui/MovieCard/MovieCard';
import { getYearFromString } from '@/lib/utils/dateUtils';

import './Trending.scss';
import { useDeviceDetection } from '@/lib/hooks/useDeviceDetection';
import { useMemo } from 'react';

interface Props {
  data: Movie[];
}

export default function Trending({ data }: Props) {
  const { isMobile } = useDeviceDetection();
  const colSpan = useMemo(() => (isMobile ? 12 : 8), [isMobile]);

  return (
    <div className="trending-container">
      <h4>Trending</h4>
      <div className="movies-container">
        {!isMobile && (
          <div className="single">
            <MovieCard movie={data[0]} movieYear={getYearFromString(data[0].premiered)} />
          </div>
        )}
        <div className="grid-list">
          <Row gutter={[18, 16]}>
            {data.slice(1).map((item) => {
              const movieYear = getYearFromString(item.premiered);
              return (
                <Col key={item.id} className="gutter-row" span={colSpan}>
                  <MovieCard movie={item} movieYear={movieYear} canWatch={false} />
                </Col>
              );
            })}
          </Row>
        </div>
      </div>
    </div>
  );
}
