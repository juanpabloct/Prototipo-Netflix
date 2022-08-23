import { Grid } from "@mui/material"
import { Carousel } from "../carousel/Carousel"
import { Navbar } from "../navbar/Navbar"
import { ShowMovie } from '../showMovie/showMovie';
import { Main } from '../main/main';
import { Box } from "@mui/system";
import { ComplementImage } from '../../Var Global/complementImage';
import { Movie, TypeMoviesInfo } from "../../types/data";
import { useSelector } from "react-redux";
import { reducer } from "../../main";
import { contextMenuProvider } from '../../contexts/contextMenu';

export const Content=()=>{
    const { loading, data, error, showMovie, popular} = useSelector(
        (state: reducer) => state.data);
    return (
        <contextMenuProvider>
                <Grid
                container
                direction={"column"}
            justifyContent={"center"}
            position={"relative"}
            style={{ overflow: "hidden" }}
            >
            <div className="imgUrl" >
              <img className='img' src={ComplementImage+showMovie.backdrop_path} alt="" />
              <div className='color'></div>
              <Navbar />
              <ShowMovie/>
              <Carousel gender={popular}/>
            </div>
            <Main />
            </Grid>
        </contextMenuProvider>

    )
}