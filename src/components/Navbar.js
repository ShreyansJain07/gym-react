import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { color, Stack,Button } from '@mui/material';
import FinalLogo from "../assets/images/FinalLogo.png";


const Navbar = () => {
  
  return (
    <Stack
      direction="row"
      justifyContent="space-around"
      sx={{ gap:{sm:'122px' ,xs:'40px'},mt:{sm:'32px',xs:'20px'},justifyContent:"none"}}
      px="20px"
    >
      <Link to="/">
      <img src={FinalLogo} alt="logo" style={{height:"48px", width:"150px",margin:"0 20px" }} />
      </Link>
      <Stack
        direction="row"
        gap="20px"
        fontSize="20px"
        alignItems="flex-end"
        pb="15px"
      >
        <Link to="/" style={{textDecoration:"none" ,color:"#3A1212",borderBottom:"3px solid #FF2625"}}>Home</Link>
        <a href="#exercises" style={{textDecoration:"none" ,color:"#3A1212"}}>Exercises</a>
        <Link to="/locate" style={{textDecoration:"none" ,color:"#3A1212"}}>Locate Gym</Link>
        <Link to="/login" style={{textDecoration:"none" ,color:"#3A1212"}}>Login</Link>
      </Stack>
    </Stack>
  )
}

export default Navbar