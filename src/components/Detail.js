import React from 'react';
import { Typography,Button,Stack } from '@mui/material';
import BodyPartImage from '../assets/icons/body-part.png';
import TargetImage from '../assets/icons/target.png' ;
import EquipmentImage from '../assets/icons/equipment.png'

const Detail = ({exerciseDetail}) => {
  const {bodyPart,gifUrl,name,target,equipment} = exerciseDetail;
  const extraDetail=[
      {
        icon:BodyPartImage,
        name:bodyPart, 
      },
      {
          icon:TargetImage,
          name:target,
      },
      {
          icon:EquipmentImage,
          name:equipment,
      }
]
    
  return (
        <Stack gap='60px' sx={{flexDirection:{lg:'row'},alignItems:'center'}} mt="20px" >
            <img src={gifUrl} alt={name} loading='lazy' className='detail-image' 
                style={{ width:'600px',height:'625px',borderRadius:"20%"}}
            />
            <Stack sx={{gap:{lg:'35px',xs:'20px'}}} >
            <Typography variant='h3' fontWeight="600" textTransform="capitalize">
                {name}
            </Typography>
            <Typography variant='h6'>
                Exercises keep you strong {name} is one of the best exercise to target your {target} 
                .It will help you improve your moodand gain energy.
            </Typography>
                {extraDetail.map((item) =>{
                    return(
                        <Stack key={item.name} direction="row" gap="24px" alignItems="center" >
                            <Button sx={{ background:'#fff2db', borderRadius:'40%',
                            width:'80px',height:'80px'}}>
                                <img src={item.icon} alt={bodyPart} 
                                    style={{ width:'40px',height:'40px'}}
                                />
                            </Button>
                            <Typography variant="h5" fontWeight="450" textTransform="capitalize">
                                {item.name}
                            </Typography>
                        </Stack>
                    );
                })}
            </Stack>
        </Stack>
  )
}

export default Detail
