import { useLayoutEffect, useEffect, useState } from 'react';
import "./App.css";
import { Navbar } from "./components/navbar/Navbar";
import { Avatar, Box, Grid, IconButton, Typography } from "@mui/material";
import { genres } from "./Var Global/genres";
import { Main } from "./components/main/main";
import { useDispatch, useSelector } from "react-redux";
import { reducer } from "./main";
import { ShowMovie } from "./components/showMovie/showMovie";
import { GetPopular } from "./functionalities/getPopular";
import { getData } from "./functionalities/getData";
import { Carousel } from "./components/carousel/Carousel";
import { setLoading } from "./reducers/valuesMovieReducers";
import { Cargando } from "./components/cargando/cargando";
import { Content } from "./components/content/content";
import imgPerfil from "./assets/profile.jpg";
import MenuIcon from "@mui/icons-material/Menu";
import { Menu } from './components/menu/menu';
function App() {
  const { loading, data, error, showMovie, popular } = useSelector(
    (state: reducer) => state.data
  );  
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setLoading());
    setTimeout(() => {
      GetPopular(dispatch);
      getData(genres, dispatch);
    }, 3000);
  }, [dispatch, GetPopular, getData, setLoading]);
  if (loading) {
    return (
      <div className="estate_charge">
        <Navbar />
        <Cargando />
      </div>
    );
  } else {
    return (
      <>
        <Content />
      </>
    );
  }
}

export default App;
