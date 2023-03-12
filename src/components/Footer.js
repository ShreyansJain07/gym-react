import React from 'react';
import { Box, Stack, Typography } from '@mui/material';
import FinalLogo from "../assets/images/FinalLogo.png";

const Footer = () => (
  <Box mt="80px" bgcolor="#FFF3F4">
    <Stack gap="40px" sx={{ alignItems: 'center',pt:3 }} flexWrap="wrap" px="40px">
      <img src={FinalLogo} alt="logo" style={{ width: '200px', height: '70px' }} />
    </Stack>
    <Typography variant="h6" sx={{ fontSize: { lg: '28px', xs: '20px' } }} mt="20px" textAlign="center" pb="40px">© Debhaa Industries, 2022</Typography>
  </Box>
);

export default Footer;