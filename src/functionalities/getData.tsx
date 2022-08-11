import { url } from '../connect api/urlApi';
import { Genres } from "../types/genres/TypeGenres";
import { setData, setLoading } from "../reducers/valuesMovieReducers";
import { AnyAction, Dispatch } from "@reduxjs/toolkit";

export const getData = async (
  genres: Genres[],
  dispatch: Dispatch<AnyAction>
) => {
  let value = await Promise.all(
    genres.map(async (gender) => {
      const data: any = url(
        `/discover/movie?api_key=20f8bdc37feb2aa2ca15659e13d847d3&with_genres=${gender.id}`
      ).then((res: any) => {
        return { name: gender.name, movies: res.data.results };
      });
      return data;
    })
  );
  dispatch(setData(value));
  dispatch(setLoading());
};
