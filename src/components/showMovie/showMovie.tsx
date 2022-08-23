import { useShowMovie } from "../../Hooks Personalities";
import { useDispatch } from "react-redux";
import { genres } from "../../Var Global/genres";
import { Calificion } from "../caliificacion/calificacion";
import { Button, Grid } from "@mui/material";
import PlayCircleFilledWhiteIcon from '@mui/icons-material/PlayCircleFilledWhite';
import "./showMovie.css"
import { GetPopular } from '../../functionalities/getPopular';
export const ShowMovie=()=>{
    const dispatch = useDispatch();
    const { overview, release_date, title, genre_ids, vote_average } =
      useShowMovie();
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
        <Grid container spacing={2} gap={4}>
          <Button
            variant="contained"
            style={{
              backgroundColor: "red",
              fontSize: "0.7rem",
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
              fontSize: "0.7rem",
              fontWeight: "600",
            }}
          >
            All Episodes
          </Button>
        </Grid>
      </div>
    )
}