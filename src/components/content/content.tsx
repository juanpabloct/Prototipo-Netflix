import { Grid } from "@mui/material";
import { Navbar } from "../navbar/Navbar";
import { ShowMovie } from "../showMovie/showMovie";
import { Main } from "../main/main";
import { ComplementImage } from "../../Var Global/complementImage";
import { useSelector } from "react-redux";
import { reducer } from "../../main";
import { Box } from '@mui/system';
import { MenuButton } from "../menu/menuButton";
import "./content.css"

export const Content = () => {
  const {  showMovie} = useSelector(
    (state: reducer) => state.data
  );
  return (
    <>
      <Grid
        container
        direction={"column"}
        justifyContent={"center"}
        position={"relative"}
        style={{ overflow: "hidden" }}
      >
        <div className="imgUrl">
          <img
            className="img"
            src={ComplementImage + showMovie.backdrop_path}
            alt=""
            />
            <div className="color">
            </div>
          <Navbar />
          <ShowMovie />
        </div>
        <Main />
      </Grid>
        <Box position={"absolute"} top={0} left={0} marginLeft={""} marginTop={"2.2rem"}>
          <MenuButton />
        </Box>
            </>
  );
};
