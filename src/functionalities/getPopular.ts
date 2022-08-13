import { url } from "../connect api/urlApi";
import { Dispatch, AnyAction } from "@reduxjs/toolkit";
import { setLoading, setPopular } from "../reducers/valuesMovieReducers";

export const GetPopular = async (dispatch: Dispatch<AnyAction>) => {
  const data: any = await url(
    `/movie/popular?api_key=20f8bdc37feb2aa2ca15659e13d847d3`
  ).then((res: any) => res.data.results);
  dispatch(setPopular({ name: "Popular", movies: data }));
};
