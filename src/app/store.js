// Configure the API from reduxjs toolkit

import { configureStore } from "@reduxjs/toolkit";
import { tmdbAPI } from "../components/Services/Api";
import genreReducer from "../Feature/currentgenre";

export default configureStore({
  reducer: {
    [tmdbAPI.reducerPath]: tmdbAPI.reducer,
    currentGenre: genreReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(tmdbAPI.middleware),
});
