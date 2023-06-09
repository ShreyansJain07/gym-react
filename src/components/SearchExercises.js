import React,{useState,useEffect} from 'react';
import { Box, Button, Stack , TextField , Typography } from '@mui/material';
import{exerciseOptions,fetchData} from '../utils/fetchData';
import HorizontalScrollbar from './HorizontalScrollbar';


const SearchExercises = ({bodyPart,setBodyPart,setExercises}) => {
  const [search,setSearch] =useState('');
  const [bodyParts,setBodyParts] = useState([]);

  useEffect(() =>{
    const fetchExerciseData = async () =>{
      const bodyPartsData = await fetchData('https://exercisedb.p.rapidapi.com/exercises/bodyPartList',exerciseOptions)
    setBodyParts(['all',...bodyPartsData]);
    }
    fetchExerciseData();
  },[])

  function handleKeydown(e) {
    if(e.key === 'Enter') handleClick();
  }

  const handleClick = async() =>{
    if(search){
      const exerciseData  = await fetchData('https://exercisedb.p.rapidapi.com/exercises',exerciseOptions);

      const searchedExercises = exerciseData.filter(
        (exercise) => exercise.name.toLowerCase().includes(search) ||
        exercise.target.toLowerCase().includes(search) ||
        exercise.equipment.toLowerCase().includes(search) ||
        exercise.bodyPart.toLowerCase().includes(search)
      );

      setSearch('');
      setExercises(searchedExercises);
      window.scrollTo({top:1800,behavior: 'smooth'})
    }
  }

  return (
      <Stack alignItems="center" mt="37px" justifyContent="center" p="20px" >
        <Typography fontWeight={700}
         sx={{fontSize:{lg:'44px', xs:'30px'}}} mb="50px" textAlign="center" >
          Awesome Exercises You <br />
          Should Know
        </Typography>
        <Box position="relative" mb="72px">
          <TextField
          sx={{
            input:{
              fontWeight:'700',
              border:'none',
              borderRadius:'4px'
            },
            width:{lg:'800px',xs:'350px'},
            backgroundColor:"white",
            borderRadius:"40px"
          }} 
          height="76px" 
          value={search} 
          placeholder='Search Exercise' 
          type="text"
          onChange={(e) =>{setSearch(e.target.value.toLowerCase())}}
          onKeyDown={handleKeydown}
           />
           <Button className="search-btn" 
           sx={{
              bgcolor:"#FF2625",
              color:"white",
              textTransform:'none',
              width:{lg:'175px',xs:'14px'},
              fontSize: {lg:"20px" , xs: "14px"},
              height: '56px',
              position:"absoute",
              right:'0'
            }}
            onClick={handleClick}
            >
            Search
           </Button>
        </Box>
        <Box sx={{position:'relative',width:'100%',p:'20px'}}>
            <HorizontalScrollbar 
            data={bodyParts}
            bodyPart={bodyPart}
            setBodyPart={setBodyPart}
            isBodyParts />
        </Box>
      </Stack>
  )
}

export default SearchExercises