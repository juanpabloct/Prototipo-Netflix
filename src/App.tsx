import { useEffect } from "react";
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
import { useChargeData } from "./Hooks Personalities";
function App() {
  const { loading, data, error, showMovie, popular } = useSelector(
    (state: reducer) => state.data
  );
  const dispatch = useDispatch();
  useEffect(() => {
    GetPopular(dispatch);
    getData(genres, dispatch);
    dispatch(setLoading(false));
    return;
  }, []);
  if (loading) {
    return (
      <Grid
        container
        direction={"column"}
        justifyContent={"center"}
        position={"relative"}
        style={{ overflow: "hidden" }}
      >
        <div className="imgUrl">
          <img src={ComplementImage + showMovie.backdrop_path} alt="Portada" />
          <Navbar />
          {loading && <div style={{ color: "white" }}>cargando</div>}

          <ShowMovie />
          <Carousel gender={popular} />
        </div>
        <Main />
      </Grid>
    );
  } else {
    return;
    <Grid
      container
      direction={"column"}
      justifyContent={"center"}
      position={"relative"}
      style={{ overflow: "hidden" }}
    >
      {" "}
      <Navbar />
    </Grid>;
  }
}

export default App;
