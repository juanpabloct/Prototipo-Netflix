import img from "../../assets/pngwing.com.png";
import "./navbar.css";
import { Grid } from "@mui/material";
import { dateComplete } from "./dates";
import imgUser from "../../publics/user.jpg";
import { ComplementImage } from "../../Var Global/complementImage";
import { useSelector } from "react-redux";
import { reducer } from "../../main";
import { MenuButton } from "../menu/menuButton";
import { Profile } from "../profiles/profile";

export const Navbar = () => {
  const { backdrop_path } = useSelector((state: reducer) => {
    return state.data.showMovie;
  });
  return (
    <header className="navbar">
      <Grid container justifyContent={"space-between"}>
        <Grid
          container
          gap={"2"}
          width="70%"
          maxWidth={"500px"}
          marginLeft={"3rem"}
          justifyContent={"space-around"}
        >
          <img src={img} alt="Logo Netflix" title="Logo" className="logo" />
          <span className="contentNavbar">{dateComplete}</span>
        </Grid>
      </Grid>
      <Profile />
    </header>
  );
};
