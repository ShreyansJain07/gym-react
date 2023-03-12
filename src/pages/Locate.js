import React from 'react';
import { Link } from 'react-router-dom';
import { Stack,Typography } from '@mui/material';
const Locate = () => {
  return (<Link to="/locate">
      <Stack sx={{mt:10,ml:10,mr:10 }}>
      <iframe src="https://my.atlistmaps.com/map/a752904a-34d5-42b7-ad15-bf4cf61fb289?share=true" title="maps" allow="geolocation" width="100%" height="600px" frameborder="0" scrolling="no" allowfullscreen></iframe>
      </Stack>
      </Link>
  )
}

export default Locate;