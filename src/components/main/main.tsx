import { Button, Grid } from "@mui/material";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { genres } from "../../Var Global/genres";
import { Calificion } from "../caliificacion/calificacion";
import PlayCircleFilledWhiteIcon from "@mui/icons-material/PlayCircleFilledWhite";

import "./main.css";

import { SectionCarousel } from "../carousel/sectionCarousel";
export const Main = () => {

  return (
    <div >
      <Grid container spacing={1}>
        <Grid item xs={12}>
          <SectionCarousel />
        </Grid>
      </Grid>
    </div>
  );
};
