'use client';

import React, { useLayoutEffect, useMemo, useRef } from 'react';

import Image from 'next/image';

import { Card } from 'antd';

import { useVirtualizer, useWindowVirtualizer } from '@tanstack/react-virtual';

import { MovieDescription } from '@/app/components/ui/MovieDescription/MovieDescription';

import noImage from '@/assets/images/no-image.png';

import { useDeviceDetection } from '@/lib/hooks/useDeviceDetection';
import { chunkArray, generateColumns } from '@/lib/utils/virtualizedListUtils';

import { Movie } from '@/types/movie.interface';

import './VirtualisedGridList.scss';

interface Props {
  windowData: Array<Movie>;
  className: string;
}

export const VirtualisedGridList = ({ windowData, className }: Props) => {
  const parentRef = useRef<HTMLDivElement | null>(null);
  const parentOffsetRef = useRef(0);

  const { isMobile } = useDeviceDetection();

  const columnsCount = useMemo(() => (isMobile ? 1 : 4), [isMobile]);

  const columns = useMemo(() => generateColumns(columnsCount), [columnsCount]);

  const data = useMemo(() => chunkArray(windowData, columnsCount), [windowData, columnsCount]);

  const cardSizes = useMemo(
    () => (isMobile ? { width: 200, height: 300 } : { width: 240, height: 340 }),
    [isMobile]
  );

  useLayoutEffect(() => {
    parentOffsetRef.current = parentRef.current?.offsetTop ?? 0;
  }, []);

  const virtualizer = useWindowVirtualizer({
    count: data.length,
    estimateSize: () => 350,
    overscan: 5,
    scrollMargin: parentOffsetRef.current,
  });

  const columnVirtualizer = useVirtualizer({
    horizontal: true,
    count: columns.length,
    getScrollElement: () => parentRef.current,
    estimateSize: () => 12,
    overscan: 5,
  });

  const columnItems = columnVirtualizer.getVirtualItems();

  return (
    <div ref={parentRef} className="grid-container">
      <div
        style={{
          height: virtualizer.getTotalSize(),
        }}
        className={className}
      >
        {virtualizer.getVirtualItems().map((row) => {
          return (
            <div
              key={row.key}
              data-index={row.index}
              ref={virtualizer.measureElement}
              className="row"
              style={{
                transform: `translateY(${row.start - virtualizer.options.scrollMargin}px)`,
              }}
            >
              {columnItems.map((column) => {
                const item = data[row.index][column.index];
                if (!item) {
                  return null;
                }
                const { id, image, name } = item;
                return (
                  <div key={column.key}>
                    <Card
                      key={id}
                      hoverable
                      style={cardSizes}
                      classNames={{
                        root: 'card',
                        body: 'body-card',
                        cover: 'cover-card',
                      }}
                      cover={
                        <Image
                          draggable={false}
                          alt={name}
                          src={image?.medium || noImage}
                          width={200}
                          height={300}
                          loading="lazy"
                          className="poster-img"
                        />
                      }
                    >
                      <div className="overlay" />
                      <MovieDescription movie={item} canWatch={false} withGenres={false} />
                    </Card>
                  </div>
                );
              })}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default VirtualisedGridList;
