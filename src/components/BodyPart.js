import React from 'react'
import { Stack,Typography } from '@mui/material';
import All from "../assets/images/exercise.png";
import Neck from "../assets/images/neck.png";
import Back from "../assets/images/back.png";
import Cardio from "../assets/images/cardio.png";
import Chest from "../assets/images/chest.png";
import LowerArms from  "../assets/images/lower_arm.png";
import LowerLeg from "../assets/images/lower_leg.png";
import Shoulders from "../assets/images/shoulder.png";
import UpperArms from "../assets/images/upper_arms.png";
import UpperLegs from "../assets/images/upper_legs.png";
import Waist from "../assets/images/waist.png";

const BodyPart = ({item,bodyPart,setBodyPart}) => {
  function handleImg(){
    if(item === "all") {return All};
    if(item === "back") {return Back};
    if(item === "cardio") {return Cardio};
    if(item === "chest") {return Chest};
    if(item === "lower arms") {return LowerArms};
    if(item === "lower legs") {return LowerLeg};
    if(item === "neck") {return Neck};
    if(item === "shoulders") {return Shoulders};
    if(item === "upper arms") {return UpperArms};
    if(item === "upper legs") {return UpperLegs};
    if(item === "waist") {return Waist};
  }
  return (
    <Stack 
    type="button" 
    alignItems="center" 
    justifyContent="center" 
    className='bodyPart-card'
    sx={{
    borderBottom: bodyPart === item ? '4px solid #ff2625':'',
    backgroundColor:"white",
    borderBottomLeftRadius:'20px',
    width:'170px',
    height:'180px',
    cursor:'pointer',
    gap:'47px',borderRadius:"20%"
    }} 
    onClick={() => {
        setBodyPart(item);
        window.scrollTo({top: 1800, left: 100, behavior: 'smooth'})
    }}
    >
        <img src={handleImg()} alt="dumbbell" style={{width:"40px",height:"40px"}} />
        <Typography
         fontSize="24px"
         fontWeight="bold"
         color="#3A1212"
         textTransform="capitalize"
        >{item}</Typography>
    </Stack>
  )
}

export default BodyPart