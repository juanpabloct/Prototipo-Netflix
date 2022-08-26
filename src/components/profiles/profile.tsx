import { Avatar, Box } from "@mui/material";
import { useProfiles } from "../../Hooks Personalities/index";
import { Link } from "react-router-dom";

export const Profile = () => {
  const { profileSelected } = useProfiles();
  return (
    <Link to={"/"}>
      <Box width={"100%"} height={"100%"}>
        <Avatar
          src={profileSelected.caratula}
          alt="Perfil"
          sx={{
            height: "4rem",
            width:"4rem",
            filter: "brightness(1.3)",
            minWidth: "80px",
          }}
        />
      </Box>
    </Link>
  );
};
