import { createApi , fetchBaseQuery } from "@reduxjs/toolkit/query/react";


const page = 1 ;
export const TMDBAPI = createApi ({
   reducerPath : 'TMDBAPI' ,
   baseQuery : fetchBaseQuery({ baseUrl : "https://api.themoviedb.org/3/"}),
  endpoints : (builder) => ({
   //getmovies
    getMovies : builder.query({
        query : () => 'movie/popular?page=${page}&api_key=11ba1f6c5d3d2e1228d8e0a5d99ce10e '
    }),
  })
})

export const {
    useGetMoviesQuery,
} = TMDBAPI ;