import { Button, Grid } from "@mui/material";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { genres } from "../../Var Global/genres";
import { Calificion } from "../caliificacion/calificacion";
import PlayCircleFilledWhiteIcon from "@mui/icons-material/PlayCircleFilledWhite";

import "./main.css";
import { Carousel } from "../carousel/Carousel";
import { useShowMovie } from "../../Hooks Personalities/index";
import { getData } from "../../functionalities/getData";
import { SectionCarousel } from "../carousel/sectionCarousel";
export const Main = () => {
  const dispatch = useDispatch();
  const { overview, release_date, title, genre_ids, vote_average } =
    useShowMovie();
  const year = new Date(release_date).getFullYear().toString();
  const filtres = genre_ids
    .map((genre, index) => {
      return genres.filter((genero) => genero.id === genre);
    })
    .flat();
  useEffect(() => {
    getData(genres, dispatch);
  }, [dispatch]);
  return (
    <div>
      <div className="contentInfo">
        {filtres.map((filter, index) => {
          return (
            <span className="genre" key={filter.id}>
              {filter.name}
            </span>
          );
        })}
        <h1 className="title">{title}</h1>
        <p className="year">{year}</p>
        <p className="overview">{overview}</p>
        <Calificion vote_average={vote_average} />
        <Grid container spacing={2} gap={4}>
          <Button
            variant="contained"
            style={{
              backgroundColor: "red",
              fontSize: "1rem",
              fontWeight: "600",
            }}
            endIcon={<PlayCircleFilledWhiteIcon />}
          >
            Stream Now
          </Button>
          <Button
            variant="outlined"
            style={{
              backgroundColor: "black",
              color: "white",
              borderColor: "white",
              fontSize: "1rem",
              fontWeight: "600",
            }}
          >
            All Episodes
          </Button>
        </Grid>
      </div>
      <Grid container spacing={1}>
        <Grid item xs={12}>
          <SectionCarousel />
        </Grid>
      </Grid>
    </div>
  );
};
