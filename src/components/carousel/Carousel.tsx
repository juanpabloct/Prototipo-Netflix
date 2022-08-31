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
  avance_slider = 19.5,
  limiteSlider = 300,
}: {
  gender: TypeMoviesInfo;
  width?: string;
  limiteSlider?: number;
  avance_slider?: number;
}) => {
  const dispatch = useDispatch();
  const [avanzar, setAvanzar] = useState(0);
  const valor = `-${avanzar}vw`;

  return (
    <div className="contain" style={{ width }}>
      <h1 className="gender">{gender.name}</h1>
      <div className="parentSlider">
        <IconButton
          style={{
            backgroundColor: "#6c6c6ccc",
            position: "absolute",
            left: "0",
            zIndex: "30",
            top: "40%",
          }}
          onClick={() =>
            setAvanzar(avanzar === 0 ? limiteSlider : avanzar - avance_slider)
          }
        >
          <ChevronLeftIcon sx={{ color: "##685454a8" }} />
        </IconButton>
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
        <IconButton
          style={{
            backgroundColor: "#6c6c6ccc",
            position: "absolute",
            right: "1rem",
            zIndex: "30",
            top: "40%",
          }}
          onClick={() =>
            setAvanzar(avanzar > limiteSlider ? 0 : avanzar + avance_slider)
          }
        >
          <ChevronRightIcon sx={{ color: "##685454a8" }} />
        </IconButton>
      </div>
    </div>
  );
};
