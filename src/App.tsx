import { useLayoutEffect, useEffect } from 'react';
import "./App.css";
import { Navbar } from "./components/navbar/Navbar";
import { Grid } from "@mui/material";
import { genres } from "./Var Global/genres";
import { Main } from "./components/main/main";
import { useDispatch, useSelector } from "react-redux";
import { reducer } from "./main";
import { ComplementImage } from "./Var Global/complementImage";
import { ShowMovie } from "./components/showMovie/showMovie";
import { GetPopular } from "./functionalities/getPopular";
import { getData } from "./functionalities/getData";
import { Carousel } from "./components/carousel/Carousel";
import { setLoading } from "./reducers/valuesMovieReducers";
function App() {
  const { loading, data, error, showMovie, popular} = useSelector(
    (state: reducer) => state.data
  );
  const dispatch=useDispatch()
  useLayoutEffect(() => {
    setTimeout(
      ()=>{
        GetPopular(dispatch)
        getData(genres, dispatch);
      }, 600
      )
    }, [dispatch]);
    return (
    <Grid
    container
    direction={"column"}
    justifyContent={"center"}
    position={"relative"}
    style={{ overflow: "hidden" }}
    >
          <div className="imgUrl" >
          <img src={ComplementImage+showMovie.backdrop_path} alt="" />
          <Navbar />
          {!loading&& <div style={{color:"white"}}>cargando</div>}
          {loading&&
          <>
          <ShowMovie/>
          <Carousel gender={popular}/>
          </>
          }
        </div>
        <Main />
      </Grid>
        )}


export default App;
