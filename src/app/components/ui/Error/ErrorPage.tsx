'use client';

import React from 'react';
import { Layout } from 'antd';
import Image from 'next/image';
import errorImage from '@/assets/images/error-image.svg';
import LinkButton from '@/app/components/ui/LinkButton/LinkButton';
import './Error.scss';

export function ErrorPage() {
  return (
    <Layout className="error-container">
      <Image src={errorImage} alt="error" />
      <div className="description">
        <h1>Oops!</h1>
        <h2>Something went wrong here...</h2>
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

export default ErrorPage;
