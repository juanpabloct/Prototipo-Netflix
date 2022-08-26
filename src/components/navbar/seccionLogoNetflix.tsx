import { dateComplete } from "./dates"
import { Profile } from '../profiles/profile';
import { Grid } from "@mui/material";
import img from "../../assets/pngwing.com.png"
export const SeccionLogoNetflix=()=>{
    return (
    <>
      <Grid container justifyContent={"space-between"}  marginTop={"1.5rem"} alignItems={"center"} position={"relative"}>
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
        <div className="containProfile">
          <Profile />
        </div>
      </Grid>
    </>
    )
}