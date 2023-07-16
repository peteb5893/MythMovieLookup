import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { APIKey } from './omdbApiKey'

export const api = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: 'http://www.omdbapi.com' }),
  reducerPath: 'omdbApi',
  endpoints: (build) => ({
    getMoviesByText: build.query<any, string>({
      query: (text) => `?apiKey=${APIKey}&type=movie&s=${text}`,
    }),
    getMovieDetailsById: build.query<any, string>({
        query: (id) => `?apiKey=${APIKey}&Plot=full&i=${id}`,
      }),
  }),
})

export const { useGetMoviesByTextQuery, useGetMovieDetailsByIdQuery } = api