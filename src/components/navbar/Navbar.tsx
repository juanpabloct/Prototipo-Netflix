import img from "../../assets/pngwing.com.png";
import "./navbar.css";
import { Grid } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { dateComplete } from "./dates";
import imgUser from "../../publics/user.jpg";
import { ComplementImage } from '../../Var Global/complementImage';
import { useSelector } from "react-redux";
import { reducer } from '../../main';

export const Navbar = () => {
  const { backdrop_path } = useSelector((state: reducer) => {
    return state.data.showMovie;
  });
  return (
    <header className="navbar">
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
        <nav className="containIcons">
          <SearchIcon style={{ color: "white", fontSize: "2.6rem" }} />
          <div className="content_user">
            <img src={imgUser} alt="user" title="User" />
          </div>
        </nav>
      </Grid>
    </header>
  );
};
