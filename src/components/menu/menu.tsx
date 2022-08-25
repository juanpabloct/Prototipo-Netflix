import "./stylesNavbar.css"
import { Avatar, Grid, Typography, Box} from "@mui/material"
import MenuIcon from '@mui/icons-material/Menu';
import { contentMenu } from '../../Var Global/sectionsMenu';
import imgPerfil from "../../assets/profile.jpg"
import { Profile } from "../profiles/profile";


export const Menu=({setShowMenu}:{setShowMenu:React.Dispatch<React.SetStateAction<boolean>>})=>{
    return (
        <Box
            height={"100vh"}
            width={"100%"}
            position={"fixed"}
            top={"0"}
            left={0}
            sx={{ background: "linear-gradient(90deg, black, 70%, #ffffff00)" }}
          >
          <Grid
              container
              direction={"column"}
              width={"40%"}
              height={"100%"}
              wrap={"nowrap"}
              sx={{backgroundColor:"black", marginTop:"0"}}
            >
              <Grid container item spacing={2} direction={"row"} wrap={"nowrap"} width={"40%"}  marginLeft={"1.5rem"} alignItems={"center"} marginTop={"1.4rem"}>
                <Grid item onClick={()=>{setShowMenu(currem=>!currem)}}>
                  <MenuIcon sx={{ color: "white" }} cursor={"pointer"}/>
                </Grid>
                <Grid item >
                  <Profile/>
                </Grid>
              </Grid>
              <Grid
                container
                direction={"column"}
                width={"40%"}
                height={"100%"}
                marginLeft="3rem"
              >
                {contentMenu.map((item, index)=><Box  width={"100%"} className="sectionMenu" key={index}>
                  <Typography width={"100%"} mt={3} variant={"h5"}>{item}</Typography>
                </Box>)}
              </Grid>
          </Grid>
          </Box>
    )
}