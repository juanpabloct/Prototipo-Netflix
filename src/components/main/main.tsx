import { Grid } from "@mui/material";

import "./main.css";

import { SectionCarousel } from "../carousel/sectionCarousel";
export const Main = () => {
  return (
    <div>
      <Grid container spacing={1} marginTop={"3rem"}>
        <Grid item xs={12}>
          <SectionCarousel />
        </Grid>
      </Grid>
    </div>
  );
};
