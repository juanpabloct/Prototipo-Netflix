import { dateComplete } from "./dates";
import { Profile } from "../profiles/profile";
import { Box, Grid } from "@mui/material";
import img from "../../assets/pngwing.com.png";
import { MenuButton } from "../menu/menuButton";
export const SeccionLogoNetflix = () => {
  return (
    <>
      <Grid
        container
        justifyContent={"space-between"}
        alignItems={"center"}
        position={"relative"}
      >
        <Grid
          container
          gap={"2"}
          width="70%"
          maxWidth={"500px"}
          marginLeft={"3rem"}
          justifyContent={"space-around"}
        >
          <div
            style={{
              position: "relative",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <MenuButton />
          </div>
          <img src={img} alt="Logo Netflix" title="Logo" className="logo" />
          <span className="contentNavbar">{dateComplete}</span>
        </Grid>
        <div className="containProfile">
          <Profile />
        </div>
      </Grid>
    </>
  );
};
