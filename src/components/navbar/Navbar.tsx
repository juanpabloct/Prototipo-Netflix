import img from "../../assets/pngwing.com.png"
import "./navbar.css"
import { Grid } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import PersonIcon from '@mui/icons-material/Person';
import { dateComplete } from "./dates";

export const Navbar=()=>{
    return (
        <header className="navbar">
        <Grid container justifyContent={"space-between"}>
            
            <Grid container alignItems={"center"} gap={"2"} width="18%" marginLeft={"3rem"} justifyContent={"space-around"}>    
                <img src={img} alt="Logo Netflix" title="Logo"/>
                <span>|</span>
                <span>{dateComplete}</span>
            </Grid>
            <nav className="containIcons">
                <SearchIcon style={{color:"white"}}/>
                <div>
                    <PersonIcon style={{color:"white"}}/>
                </div>
            </nav>
        </Grid>
        </header>
    )
}