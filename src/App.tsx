import { useEffect, useState } from "react";
import "./App.css";
import { Navbar } from "./components/navbar/Navbar";
import { Grid } from "@mui/material";
import { genres } from "./Var Global/genres";
import { DataMovies } from "./types/TypeDataMovie";
import { Main } from "./components/main/main";
import { useDispatch, useSelector } from "react-redux";
import { reducer } from './main';
import { ComplementImage } from "./Var Global/complementImage";
function App() {
  const { loading, data, error, showMovie } = useSelector(
    (state: reducer) => state.data
  );
  const {backdrop_path}=useSelector((state:reducer)=>{
    return state.data.showMovie
  })
  return (
    <>
      <div className="imgUrl" style={{backgroundImage:`url(${ComplementImage +backdrop_path})`}}></div>
    <Grid container direction={"column"} justifyContent={"center"} position={"relative"}>
      <Navbar />
      {!loading && <Main />}
    </Grid>
    </>
  );
}

export default App;
