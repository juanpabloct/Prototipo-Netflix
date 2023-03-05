import { IconButton } from "@mui/material";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import { useRef, useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { setShowMovies } from "../../reducers/valuesMovieReducers";
import { Movie, TypeMoviesInfo } from "../../types/data/index";
import { ComplementImage } from "../../Var Global/complementImage";
import "./querys.css";
export const Carousel = ({
  gender,
  width = "100vw",
  style = "imgMovie",
}: {
  gender: TypeMoviesInfo;
  width?: string;
  style?: string;
}) => {
  const contain = useRef<HTMLDivElement>(null);
  const dispatch = useDispatch();
  const [avanzar, setAvanzar] = useState(0);
  const valor = `-${avanzar}px`;
  const image = useRef<HTMLImageElement>(null);
  const sizeImage = image?.current?.width ?? 1;
  const multiplicar = gender.movies.length % 2 === 0 ? 2 : 1;
  const ValorLimite = (sizeImage + 4) * (gender.movies.length - 1);
  return (
    <div className="contain" ref={contain} style={{ width: width }}>
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
          onClick={() => {
            gender;
            if (sizeImage && contain.current && ValorLimite) {
              const resultadoRetroceso = avanzar - sizeImage * multiplicar;
              const retroceder =
                resultadoRetroceso < 0 ? 0 : resultadoRetroceso;
              setAvanzar(
                avanzar <= 0
                  ? ValorLimite
                  : avanzar < sizeImage
                  ? 0
                  : retroceder
              );
            }
          }}
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
                ref={image}
                className={style}
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
          onClick={() => {
            if (sizeImage && contain.current && ValorLimite) {
              const widthContain = contain.current.clientWidth;
              const resultadoAvance = avanzar + sizeImage * multiplicar;
              setAvanzar(
                avanzar === 0
                  ? resultadoAvance
                  : avanzar >= ValorLimite
                  ? 0
                  : resultadoAvance
              );
            }
          }}
        >
          <ChevronRightIcon sx={{ color: "##685454a8" }} />
        </IconButton>
      </div>
    </div>
  );
};
