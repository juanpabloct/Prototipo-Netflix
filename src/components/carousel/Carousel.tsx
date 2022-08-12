import { Button, Grid, IconButton } from "@mui/material";
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { setShowMovies } from "../../reducers/valuesMovieReducers";
import { Movie, TypeMoviesInfo } from '../../types/data/index';
import { ComplementImage } from "../../Var Global/complementImage";
import "./querys.css"
export const Carousel = ({ gender }: { gender: TypeMoviesInfo}) => {
  const dispatch = useDispatch();
  const [avanzar, setAvanzar] = useState(0);
  const valor = `-${avanzar}%`;

  return (
    <div className="contain">
      <h1 className="gender">{gender.name}</h1>
      <div className="parentSlider">
        <div
          className="contain_carousel"
          style={{ transform: `translateX(${valor})` }}
        >
          {gender.movies.map((movie: Movie) => {
            return (
              <div
                key={movie.id}
                className="contentImage"
                onClick={() => dispatch(setShowMovies(movie))}
              >
                <img
                  src={ComplementImage + movie.poster_path}
                  alt={movie.title}
                />
                <figcaption className="titleMovie">{movie.title}</figcaption>
              </div>
            );
          })}
        </div>
      </div>
      <Grid container spacing={2}  justifyContent={"space-between"} marginY={"1rem"} className="contain_button">
        <IconButton  style={{backgroundColor:"red"}} onClick={() => setAvanzar(avanzar ===0?80:avanzar-5)}>
          <ChevronLeftIcon/>
        </IconButton>
        <IconButton  style={{backgroundColor:"red"}} onClick={() => setAvanzar(avanzar !== 80 ? avanzar + 5 : 0)}>
        <ChevronRightIcon/>
        </IconButton>
      </Grid>
    </div>
  );
};
