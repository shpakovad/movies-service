import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { MOVIES_API } from '@/constants/constants';

export const tvmazeApi = createApi({
  reducerPath: 'tvmazeApi',
  baseQuery: fetchBaseQuery({ baseUrl: MOVIES_API }),
  endpoints: (build) => ({
    getMovieById: build.query({
      query: (id: string) => `shows/${id}`,
    }),

    getMovieCast: build.query({
      query: (id: string) => {
        return `shows/${id}/cast`;
      },
    }),

    getMoviesList: build.query({
      query: (page = 1) => {
        return `shows?page=${page}`;
      },
      keepUnusedDataFor: 60,
    }),

    getMoviesByIds: build.query({
      queryFn: async (ids: string[], _api, _extraOptions, baseQuery) => {
        try {
          const promises = ids.map((id) => baseQuery(`shows/${id}`));

          const results = await Promise.allSettled(promises);

          const successfulResults = results
            .filter((result) => result.status === 'fulfilled' && result.value.data)
            .map((result: any) => {
              return result.value.data;
            });

          return { data: successfulResults };
        } catch (error: any) {
          return { error: { status: 'CUSTOM_ERROR', error: error.message } };
        }
      },
    }),
  }),
});

export const {
  useGetMovieByIdQuery,
  useGetMoviesByIdsQuery,
  useGetMovieCastQuery,
  useGetMoviesListQuery,
} = tvmazeApi;
