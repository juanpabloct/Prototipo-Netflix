import MenuIcon from '@mui/icons-material/Menu';
import { Box, IconButton, SwipeableDrawer } from '@mui/material';
import { useState } from 'react';

export const MenuButton=()=>{
    const [openSwipeable, setOpenSwipeable]=useState(false)
    return (
    <Box marginX={"2rem"} height={"100%"}>
        <IconButton>
            <MenuIcon sx={{color:"white"}}/>
        </IconButton>

    </Box>
    )
}