import MenuIcon from "@mui/icons-material/Menu";
import { Box, IconButton, SwipeableDrawer } from "@mui/material";
import { useState } from "react";
import { useContextMenu } from "../../../contexts/contextMenu";

export const MenuButton = () => {
  const { setShowMenu } = useContextMenu();
  return (
    <Box marginX={"2rem"} height={"100%"} position={"absolute"}>
      <IconButton
        onClick={() => {
          console.log(setShowMenu(false));
        }}
      >
        <MenuIcon sx={{ color: "white" }} />
      </IconButton>
    </Box>
  );
};
