import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit"
import moviesReducer from "../features/movies/moviesSlice"
import { loadState, saveState } from "./localStorage";
import { api } from "../common/apis/apiRTKQuery";

const persistedState = loadState();
export const store = configureStore({
  reducer: {    
    movies: moviesReducer,
    [api.reducerPath]: api.reducer
  },
  preloadedState: persistedState,
  middleware: (gDM) => gDM().concat(api.middleware)
})

store.subscribe(() => {
  saveState({
    movies: store.getState().movies
  });
});

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>
