import MenuIcon from "@mui/icons-material/Menu";
import { Box, IconButton } from "@mui/material";
import { useState } from "react";
import { Menu } from './menu';

export const MenuButton = () => {
  const [showMenu, setShowMenu]=useState(false)
  return (
    <>
    <Box marginX={"2rem"} height={"100%"} position={"absolute"}>
      <IconButton
        onClick={() => 
          setShowMenu(currem=>!currem)
        }
        >
        <MenuIcon sx={{ color: "white" }} />
      </IconButton>
        {showMenu&&<Menu setShowMenu={setShowMenu} />}
    </Box>
        </>
  );
};
