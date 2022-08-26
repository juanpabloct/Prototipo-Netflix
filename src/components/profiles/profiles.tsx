import { Avatar,  Typography } from "@mui/material";
import { useProfiles } from "../../Hooks Personalities/index";
import "./profiles.css";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { changeProfileSelected } from "../../reducers/profiles";
import AddIcon from '@mui/icons-material/Add';
import Swal from "sweetalert2";
import iconProcess from "../../assets/iconProcess.png"
const alert=()=>Swal.fire({
  confirmButtonColor:"#00c8e0",
  imageUrl:`${iconProcess}`,
  title: 'Actually this section is in construction',
  showClass: {
    popup: 'animate__animated animate__fadeInDown'
  },
  hideClass: {
    popup: 'animate__animated animate__fadeOutUp'
  }
})

export const Profiles = () => {
  document.title = "Netflix";
  const { profiles } = useProfiles();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  return (
    <section className="sectionProfiles">
      <div className="contain_allProfiles">
      <h1 className="title">¿Who's Watching?</h1>
      <div className="contain_profile">
        {profiles.map((profile, index) => (
          <div key={index} className="profile">
            <Avatar
              src={profile.caratula}
              alt={profile.nombrePerfil}
              sx={{
                width: "8rem",
                height: "8rem",
                maxWidth: "200px",
                cursor: "pointer",
                boxShadow: "0.5rem 0.5rem #1a1c29",
              }}
              onClick={() => {
                dispatch(changeProfileSelected(profile));
                navigate("/home");
              }}
              />
            <Typography className="titleProfile" sx={{ fontSize: "1.3rem" }}>
              {profile.nombrePerfil}
            </Typography>
          </div>
        ))}
        <div className="containAdd_Profile">
          <button className="buttonAddProfile" onClick={()=>{
          alert()
          }}>
            <AddIcon  sx={{height:"60%", width:"60%"}}/>
          </button>
          <h2 className="titleAddProfile">Add Profile</h2>
        </div>
      </div>
        </div>
    </section>
  );
};
