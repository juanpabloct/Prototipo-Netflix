import img from "../../assets/pngwing.com.png";
import "./navbar.css";
import { Grid } from "@mui/material";
import { dateComplete } from "./dates";
import { useSelector } from "react-redux";
import { reducer } from "../../main";
import { Profile } from "../profiles/profile";
import { ComplementImage } from '../../Var Global/complementImage';
import { ShowMovie } from "../showMovie/showMovie";
import { SeccionLogoNetflix } from "./seccionLogoNetflix";

export const Navbar = () => {
  const { backdrop_path } = useSelector((state: reducer) => {
    return state.data.showMovie;
  });
  const {  showMovie} = useSelector(
    (state: reducer) => state.data
  );
  return (
    <header className="navbar" style={{backgroundImage:`url(${ComplementImage + showMovie.backdrop_path})`}}>
      <SeccionLogoNetflix/>
      <ShowMovie />
    </header>
  );
};
