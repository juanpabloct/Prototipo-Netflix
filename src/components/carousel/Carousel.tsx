import { Grid, IconButton } from "@mui/material";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { setShowMovies } from "../../reducers/valuesMovieReducers";
import { Movie, TypeMoviesInfo } from "../../types/data/index";
import { ComplementImage } from "../../Var Global/complementImage";
import "./querys.css";
export const Carousel = ({
  gender,
  width = "100vw",
  height = "100%",
}: {
  gender: TypeMoviesInfo;
  width?: string;
  height?: string;
}) => {
  const dispatch = useDispatch();
  const [avanzar, setAvanzar] = useState(0);
  const valor = `-${avanzar}%`;
  console.log(valor);
  

  return (
    <div className="contain" style={{ width, height }}>
      <h1 className="gender">{gender.name}</h1>
      <div className="parentSlider">
        <div
          className="contain_carousel"
          style={{ transform: `translateX(${valor})` }}
        >
          {gender.movies.map((movie: Movie) => {
            return (
              <img
                className="imgMovie"
                key={movie.id}
                src={ComplementImage + movie.poster_path}
                alt={movie.title}
                onClick={() => {
                  dispatch(setShowMovies(movie));
                  window.scrollTo(0, 0);
                }}
              />
            );
          })}
        </div>
      </div>
      <Grid
        container
        spacing={2}
        sx={{ width: "95%" }}
        justifyContent={"space-between"}
        marginY={"1rem"}
        className="contain_button"
      >
        <IconButton
          style={{ backgroundColor: "#6c6c6ccc" }}
          onClick={() => setAvanzar(avanzar === 0 ? 300 : avanzar -19.7)}
        >
          <ChevronLeftIcon sx={{ color: "##685454a8" }} />
        </IconButton>
        <IconButton
          style={{ backgroundColor: "#6c6c6ccc" }}
          onClick={() => setAvanzar(avanzar>310?0:avanzar +19.7)}
        >
          <ChevronRightIcon sx={{ color: "##685454a8" }} />
        </IconButton>
      </Grid>
    </div>
  );
};
