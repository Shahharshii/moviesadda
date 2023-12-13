import { configureStore } from '@reduxjs/toolkit'
import { TMDBAPI } from '../components/Services/Api'

export default configureStore({
  
  reducer: {
    [TMDBAPI.reducerPath] : TMDBAPI.reducer,
  },
  middleware : (getDefaultMiddleware) => 
  getDefaultMiddleware().concat(TMDBAPI.middleware),
})