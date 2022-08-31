import { Grid } from "@mui/material";
import { Navbar } from "../navbar/Navbar";
import { Main } from "../main/main";
import { Box } from "@mui/system";
import { MenuButton } from "../menu/menuButton";
import "./content.css";
import { useNavigate } from "react-router-dom";
import { useProfiles } from "../../Hooks Personalities";
import { useEffect } from "react";

export const Content = () => {
  const { profileSelected } = useProfiles();
  const navigate = useNavigate();
  useEffect(() => {
    profileSelected.caratula == "" &&
      profileSelected.nombrePerfil == "" &&
      navigate("/");
  }, []);
  return (
    <>
      <Grid
        container
        direction={"column"}
        justifyContent={"center"}
        position={"relative"}
      >
        <Navbar />
        <Main />
      </Grid>
      <Box
        position={"absolute"}
        top={0}
        left={0}
        marginLeft={""}
        marginTop={"2.2rem"}
      >
        <MenuButton />
      </Box>
    </>
  );
};
