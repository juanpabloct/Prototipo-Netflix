import { useEffect, useState } from "react";
import "./App.css";
import { Navbar } from "./components/navbar/Navbar";
import { Grid } from "@mui/material";
import { url } from "./connect api/urlApi";
import { genres } from "./Var Global/genres";
import { Genres } from "./types/genres/TypeGenres";
import { DataMovies } from "./types/TypeDataMovie";
import { Main } from "./components/main/main";
import { useDispatch, useSelector } from "react-redux";
import { setData, setLoading } from "./reducers/valuesMovieReducers";
import { AnyAction, Dispatch } from "@reduxjs/toolkit";
import { reducer } from "./main";
export const getData = async (
  genres: Genres[],
  dispatch: Dispatch<AnyAction>
) => {
  let value = await Promise.all(
    genres.map(async (gender) => {
      const data: any = url(
        `/discover/movie?api_key=20f8bdc37feb2aa2ca15659e13d847d3&with_genres=${gender.id}`
      ).then((res: any) => {
        return { gender: gender.name, movies: res.data.results };
      });
      return data;
    })
  );
  dispatch(setData(value));
  dispatch(setLoading());
};
function App() {
  const { loading, data, error, showMovie } = useSelector(
    (state: reducer) => state.data
  );
  return (
    <Grid container direction={"column"} justifyContent={"center"}>
      <Navbar />
      {!loading && <Main />}
    </Grid>
  );
}

export default App;
