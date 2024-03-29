import { usePopulars, useShowMovie } from "../../Hooks Personalities";
import { genres } from "../../Var Global/genres";
import { Calificion } from "../caliificacion/calificacion";
import { Button, Grid } from "@mui/material";
import PlayCircleFilledWhiteIcon from "@mui/icons-material/PlayCircleFilledWhite";
import "./showMovie.css";
import { Carousel } from "../carousel/Carousel";
export const ShowMovie = () => {
  const { overview, release_date, title, genre_ids, vote_average } =
    useShowMovie();
  const popular = usePopulars();
  const year = new Date(release_date).getFullYear().toString();
  const filtres = genre_ids
    .map((genre, index) => {
      return genres.filter((genero) => genero.id === genre);
    })
    .flat();
  return (
    <div className="contentInfo">
      <Grid width={"100%"}>
        <h1 className="title">{`${title} - ${year}`}</h1>
        <Grid>
          {filtres.map((filter, index) => {
            return (
              <span className="genre" key={filter.id}>
                {filter.name}
              </span>
            );
          })}
        </Grid>
        <p className="overview">{overview}</p>
        <Grid>
          <Calificion vote_average={vote_average} />
        </Grid>
        <Grid
          container
          spacing={2}
          gap={4}
          height={"2rem"}
          alignItems={"center"}
          wrap={"wrap"}
        >
          <Button
            variant="contained"
            style={{
              backgroundColor: "red",
              fontSize: "0.7rem",
              fontWeight: "600",
              height: "2.2rem",
              width: "20%",
              minWidth: "125px",
              maxWidth: "200px",
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
              fontSize: "0.7rem",
              fontWeight: "600",
              height: "2.2rem",
              width: "20%",
              minWidth: "125px",
              maxWidth: "200px",
            }}
          >
            All Episodes
          </Button>
        </Grid>
      </Grid>
      <div className="contenedor_carrusel_principal">
        <Carousel gender={popular} width={"60vw"} style={"imgpopular"} />
      </div>
    </div>
  );
};
