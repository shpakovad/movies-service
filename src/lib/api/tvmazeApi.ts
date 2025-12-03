import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { MOVIES_API } from '@/constants/constants';

export const tvmazeApi = createApi({
  reducerPath: 'tvmazeApi',
  baseQuery: fetchBaseQuery({ baseUrl: MOVIES_API }),
  endpoints: (build) => ({
    getMovieById: build.query({
      query: (id: string) => `shows/${id}`,
    }),
  }),
});

export const { useGetMovieByIdQuery } = tvmazeApi;
