import img from "../../assets/pngwing.com.png";
import "./navbar.css";
import { Box, Grid } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { dateComplete } from "./dates";
import imgUser from "../../publics/user.jpg";
import { ComplementImage } from '../../Var Global/complementImage';
import { useSelector } from "react-redux";
import { reducer } from '../../main';
import { MenuButton } from "./menu/menuButton";

export const Navbar = () => {
  const { backdrop_path } = useSelector((state: reducer) => {
    return state.data.showMovie;
  });
  return (
    <header className="navbar">
      <MenuButton/>
      <Grid container justifyContent={"space-between"}>
        <Grid
          container
          alignItems={"center"}
          gap={"2"}
          width="70%"
          maxWidth={"500px"}
          marginLeft={"3rem"}
          justifyContent={"space-around"}
        >
          <img src={img} alt="Logo Netflix" title="Logo" className="logo"/>
          <span className="contentNavbar">{dateComplete}</span>
        </Grid>
      </Grid>
    </header>
  );
};
