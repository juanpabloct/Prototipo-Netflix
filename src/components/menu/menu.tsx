import "./stylesNavbar.css";
import { Grid, Box } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { contentMenu } from "../../Var Global/sectionsMenu";
import { Profile } from "../profiles/profile";
import { height } from "@mui/system";

export const Menu = ({
  setShowMenu,
}: {
  setShowMenu: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  return (
    <Grid
      container
      zIndex={50}
      height={"100vh"}
      width={"100%"}
      position={"fixed"}
      top={"0"}
      left={0}
    >
      <Grid
        container
        direction={"column"}
        width={"10%"}
        minWidth={"260px"}
        height={"100%"}
        wrap={"nowrap"}
        sx={{
          background: "linear-gradient(90deg, black,100%, #ffffff00)",
          marginTop: "0",
        }}
      >
        <Grid
          container
          item
          spacing={2}
          direction={"row"}
          wrap={"nowrap"}
          width={"40%"}
          marginLeft={"1.5rem"}
          alignItems={"center"}
          marginTop={"0.6rem"}
          justifyContent={"space-between"}
        >
          <Grid
            item
            onClick={() => {
              setShowMenu((currem) => !currem);
            }}
          >
            <MenuIcon sx={{ color: "white" }} cursor={"pointer"} />
          </Grid>
          <Grid item>
            <Profile />
          </Grid>
        </Grid>
        <Grid
          container
          direction={"column"}
          width={"40%"}
          height={"100%"}
          marginLeft="3rem"
        >
          {contentMenu.map((item, index) => (
            <div className="sectionMenu" key={index}>
              <span className="sectionTitle">{item.section}</span>
              {<item.icon sx={{ height: "100%" }} />}
            </div>
          ))}
        </Grid>
      </Grid>
      <Grid
        sx={{
          background: "linear-gradient(90deg, black,60%, #ffffff00)",
          marginTop: "0",
          color: "white",
          width: "80%",
          height: "100%",
        }}
      >
        <div
          className="menuHijoCierre"
          onClick={() => setShowMenu(false)}
        ></div>
      </Grid>
    </Grid>
  );
};
