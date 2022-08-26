import { Avatar, Box } from "@mui/material";
import { useSelector } from "react-redux";
import { reducer } from "../../main";
import { useProfiles } from "../../Hooks Personalities/index";
import { Link } from "react-router-dom";

export const Profile = () => {
  const { profileSelected } = useProfiles();
  return (
    <Link to={"/"}>
      <Box width={"70%"} height={"100%"}>
        <Avatar
          src={profileSelected.caratula}
          alt="Perfil"
          sx={{
            height: "4rem",
            filter: "brightness(1.3)",
            minWidth: "80px",
          }}
        />
      </Box>
    </Link>
  );
};
