import { usePopulars, useShowMovie } from "../../Hooks Personalities";
import { genres } from "../../Var Global/genres";
import { Calificion } from "../caliificacion/calificacion";
import { Button, Grid } from "@mui/material";
import PlayCircleFilledWhiteIcon from "@mui/icons-material/PlayCircleFilledWhite";
import "./showMovie.css";
import { Carousel } from "../carousel/Carousel";
import { Box } from "@mui/system";
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
      {filtres.map((filter, index) => {
        return (
          <span className="genre" key={filter.id}>
            {filter.name}
          </span>
        );
      })}
      <h1 className="title">{`${title} - ${year}`}</h1>
      <p className="overview">{overview}</p>
      <Calificion vote_average={vote_average} />
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
      <Box sx={{ marginTop: "2rem" }}>
        <Carousel gender={popular} width={"90vw"} height={"25rem"} />
      </Box>
    </div>
  );
};
