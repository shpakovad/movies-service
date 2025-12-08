'use client';

import { useMemo } from 'react';
import { Col, Row } from 'antd';
import { Movie } from '@/types/movie.interface';
import MovieCard from '@/app/components/ui/MovieCard/MovieCard';
import { useDeviceDetection } from '@/lib/hooks/useDeviceDetection';

import './Trending.scss';

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
            <MovieCard movie={data[0]} />
          </div>
        )}
        <div className="grid-list">
          <Row gutter={[18, 16]}>
            {data.slice(1).map((item) => {
              return (
                <Col key={item.id} className="gutter-row" span={colSpan}>
                  <MovieCard movie={item} canWatch={false} />
                </Col>
              );
            })}
          </Row>
        </div>
      </div>
    </div>
  );
}
