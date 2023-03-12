import React from 'react';
import {Route,Routes} from "react-router-dom";
import {Box} from "@mui/material";
import Navbar from './components/Navbar';
import Home from './pages/Home';
import ExerciseDetail from './pages/ExerciseDetail';
import Footer from './components/Footer';
import Locate from './pages/Locate';
import Login from './components/Login';

import "./App.css";

const App = () => {
  return (
    <Box width="40px" sx={{ width: {xl:"1448px"}}} m="auto">
    <Navbar />
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/exercise/:id" element={<ExerciseDetail />} />
        <Route path="/locate" element={<Locate />} />
        <Route path="/login" element={<Login />} />
    </Routes>
    <Footer />
  </Box>
  )
}

export default App