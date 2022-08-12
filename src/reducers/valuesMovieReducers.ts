import { createSlice } from "@reduxjs/toolkit";
import { Movie, OriginalLanguage, TypeMoviesInfo } from "../types/data";
export interface InitialState {
  data: TypeMoviesInfo[];
  showMovie: Movie;
  error: string;
  loading: boolean;
}
const initialState: InitialState = {
  data: [],
  showMovie: {
    adult: false,
    backdrop_path: "",
    genre_ids: [],
    id: 0,
    original_language: "",
    original_title: "",
    overview: "",
    popularity: 0,
    poster_path: "",
    release_date: "",
    title: "",
    video: false,
    vote_average: 0,
    vote_count: 0,
  },
  error: "",
  loading: false,
};

export const ValuesMovieReducer = createSlice({
  name: "ValueMovies",
  initialState,
  reducers: {
    setData: (state, { payload }) => {
      state.data = payload;
      state.showMovie = payload[0].movies[0];
      state.loading = true;
    },
    setShowMovies: (state, { payload }: { payload: Movie }) => {
      state.showMovie = payload;
    },
    setLoading: (state) => {
      state.loading = false;
    },
  },
});

export default ValuesMovieReducer;
export const { setData, setLoading, setShowMovies } =
  ValuesMovieReducer.actions;
