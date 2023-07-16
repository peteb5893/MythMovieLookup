// @ts-nocheck
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import movieApi from "../../common/apis/omdbApi";
import { APIKey } from "../../common/apis/omdbApiKey";

export const fetchAsyncMovies = createAsyncThunk(
    'movies/fetchAsyncMovies', async (searchText) => {            
        const response = await movieApi
          .get(`?apiKey=${APIKey}&type=movie&s=${searchText}`)
          .catch((error) => {
            console.error("Error: ", error)
          })        
        return response?.data;
      
})

export const fetchAsyncMovieDetail = createAsyncThunk(
    'movies/fetchAsyncMovieDetail', async (id) => {
        const response = await movieApi
          .get(`?apiKey=${APIKey}&Plot=full&i=${id}`)
          .catch((error) => {
            console.error("Error: ", error)
          })        
        return response?.data;
      
})

const initialState = {
    movies: {},
    favouriteMovies: [],
    selectedMovie:{}
};

const moviesSlice = createSlice({
    name:"movies",
    initialState,
    reducers: {
        addMovies:(state, {payload}) => {
            state.movies = payload;
        },
        deselectMovie:(state) => {
            state.selectedMovie = {}
        },
        addFavourite:(state, {payload}) => {
            const existingMovie = state.favouriteMovies.find((movie) => movie.imdbID === payload.imdbID);

            if (!existingMovie) {
                state.favouriteMovies.push(payload);
            }
        },
        removeFavourite:(state, {payload}) => {
            const updatedFavouriteMovieList = state.favouriteMovies.filter((movie) => movie.imdbID !== payload);
            state.favouriteMovies = updatedFavouriteMovieList;
        },    
    },
    extraReducers: {
        [fetchAsyncMovies.pending]: () => {
            console.log("Fetching Movies");
        },
        [fetchAsyncMovies.fulfilled]: (state, {payload}) => {
            console.log("Fetched Movies Successfully");
            return {...state, movies: payload}
        },
        [fetchAsyncMovies.rejected]: () => {
            console.log("Fetching Movies Failed");
        },
        [fetchAsyncMovieDetail.pending]: () => {
            console.log("Fetching Movie Details");
        },
        [fetchAsyncMovieDetail.fulfilled]: (state, {payload}) => {
            console.log("Fetched Movie Details Successfully");
            return {...state, selectedMovie: payload}
        },
        [fetchAsyncMovieDetail.rejected]: () => {
            console.log("Fetching Movie Details Failed");
        }
    }
});

export const { addFavourite, removeFavourite, deselectMovie } = moviesSlice.actions;

export const getAllMovies = (state: { movies: { movies: any; }; }) => state.movies.movies;
export const getFavouriteMovies = (state: { movies: { movies: any; }; }) => state.movies.favouriteMovies;
export const getSelectedMovie = (state: { movies: { movies: any; }; }) => state.movies.selectedMovie;

export default moviesSlice.reducer;

