import { Avatar,  Typography } from "@mui/material";
import { useProfiles } from "../../Hooks Personalities/index";
import "./profiles.css";
import { useNavigate } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { changeProfileSelected } from "../../reducers/profiles";
export const Profiles = () => {
  const { profiles } = useProfiles();
  const navigate=useNavigate()
  const dispatch=useDispatch()
  return (
    <section className="sectionProfiles">
      <h1 className="title">¿Who's Watching?</h1>
    <div className="contain_profile">

        {profiles.map((profile, index)=>(
        <div key={index} className="profile">
          <Avatar src={profile.caratula} alt={profile.nombrePerfil} sx={{width:"50%", height:"50%", maxWidth:"200px", cursor:"pointer", boxShadow:"0.5rem 0.5rem #1a1c29"}} onClick={()=>{
            dispatch(changeProfileSelected(profile)) 
            navigate("/home")
            }}/> 
          <Typography className="titleProfile" sx={{fontSize:"1.8rem"}}>{profile.nombrePerfil}</Typography>
        </div>
          ))}
    </div>
    </section>
  );
};
