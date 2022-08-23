import { Avatar, Grid, Typography, Box} from "@mui/material"
import MenuIcon from '@mui/icons-material/Menu';
import { contentMenu } from '../../../Var Global/sectionsMenu';
import imgPerfil from "../../../assets/profile.jpg"
const Menu=({showMenu}:{showMenu:boolean})=>{
    return (
        <Box
            height={"100vh"}
            width={"100%"}
            sx={{ background: "linear-gradient(90deg, black, #ffffff00)" }}
            position={"fixed"}
            top={"0"}
          >
          <Grid
              container
              direction={"column"}
              width={"40%"}
              height={"100%"}
              wrap={"nowrap"}
            >
              <Grid container item spacing={2} direction={"row"} wrap={"nowrap"} width={"40%"} justifyContent={"center"} alignItems={"center"} marginTop={"2rem"}>
                <Grid item >
                  <MenuIcon sx={{ color: "white" }} />
                </Grid>
                <Grid item >
                  <Avatar src={imgPerfil} alt="Perfil" />
                </Grid>
              </Grid>
              <Grid
                container
                direction={"column"}
                width={"40%"}
                height={"100%"}
                marginLeft="3rem"
              >
                {contentMenu.map((item, index)=><Box color={"white"} width={"100%"} className="sectionMenu" key={index}>
                  <Typography>{item}</Typography>
                </Box>)}
              </Grid>
            </Grid>
          </Box>
    )
}