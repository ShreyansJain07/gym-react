import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { Paper, Stack,TextField,Typography,Button } from '@mui/material';


const Login = () => {
    const [name,setName]=useState("");
    const [sname,setSname]=useState("");
    const [email,setEmail]=useState("");
    const [h,setH]=useState(0);
    const [w,setW]=useState(0);
  return (
    <div className='login'>
    <Typography variant='h2' color="#FF2625" fontWeight="600" pt='40px' pb='20px' align='center' >
        Welcome, {name} {sname}
    </Typography>
    <Paper elevation={24} sx={{mt:8,ml:40,mr:40,height:400,borderRadius:8}}>
    <Typography variant='h2' color="#FF2625" fontWeight="600" pt='40px' align='center' >
        Sign In
    </Typography>
    <Stack
    pt='2rem'
    direction="row"
  justifyContent="center"
  alignItems="center"
  spacing={4}
    >
    <TextField type="text" value={name} id="outlined-basic" label="Name" variant="outlined" onChange={(e)=>setName(e.target.value)} />
    <TextField type="text" value={sname} id="outlined-basic" label="Surname" variant="outlined" onChange={(e)=>setSname(e.target.value)}/>
    <TextField type="text" value={email} required id="outlined-basic" label="Email" variant="outlined" onChange={(e)=>setEmail(e.target.value)}/>
    </Stack>

    <Stack
    pt='2rem'
    direction="row"
  justifyContent="center"
  alignItems="center"
  spacing={4}
    >
    <TextField required type="number" value={h} id="outlined-basic" label="Height (m)"  variant="outlined" onChange={(e)=>setH(e.target.value)}/>
    <TextField required type="number" value={w} id="outlined-basic" label="Weight (kg)" variant="outlined"  onChange={(e)=>setW(e.target.value)}/>
    </Stack>

    <Stack
    pt='2rem'
    direction="row"
  justifyContent="center"
  alignItems="center"
  spacing={4}
    >
    <Button 
       variant='contained' 
       color="error" 
       href="#exercises" 
       sx={{backgroundColor:"#ff2625",padding:"10px",borderRadius:3}}
       onClick={()=> alert("details saved \nBMI: "+Math.trunc(w/(h**2)))}
       >
       Submit</Button>
    </Stack>

    </Paper>
   
    </div>
  )
}

export default Login