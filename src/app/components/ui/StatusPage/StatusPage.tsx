'use client';

import React, { useMemo } from 'react';

import { Layout } from 'antd';

import Image from 'next/image';

import LinkButton from '@/app/components/ui/LinkButton/LinkButton';

import errorImage from '@/assets/images/error-image.svg';
import noResultsImage from '@/assets/images/no-results-image.svg';

import './StatusPage.scss';

export function StatusPage({ type = 'error' }: { type?: string }) {
  const isErrorPage = useMemo(() => type === 'error', [type]);

  const imageType = useMemo(() => (isErrorPage ? errorImage : noResultsImage), [isErrorPage]);

  const descriptionType = useMemo(
    () =>
      isErrorPage ? (
        <>
          <h1>Oops!</h1>
          <h2>Something went wrong here...</h2>
        </>
      ) : (
        <>
          <h1>Oops!</h1>
          <h2>No results found for your search.</h2>
          <h2>Please try a different query or</h2>
        </>
      ),
    [isErrorPage]
  );

  return (
    <Layout className="status-container">
      <Image src={imageType} alt="error" />
      <div className="description">
        {descriptionType}
        <h2>
          <LinkButton
            href={'/'}
            children={
              <>
                {' '}
                <span>go back Home </span>
              </>
            }
          />
        </h2>
      </div>
    </Layout>
  );
}

export default StatusPage;
