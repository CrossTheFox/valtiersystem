import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from 'react-router-dom';


import Navigation from './../views/Navigation.js';
import Footer from './../views/Footer.js';
import Body from './../views/Body.js';
import Compendio from './../views/Compendio.js';



function Home() {

  const dispatch = useDispatch();
  const isLogged = useSelector((store) => store.authReducer.isLogged);


  console.log(isLogged);

  return (
        <Grid container rowSpacing={3} flex>
            <Grid item xs={12}>
                <Navigation loginstate={isLogged}/>
            </Grid>
            <Grid item xs={12}>
                <Routes>
                    <Route path='/' element={<Body loginstate={isLogged}/>}/>
                    <Route path='/compendio' element={<Compendio/>}/>
                </Routes>
            </Grid>
            <Grid item xs={12}>
             <Footer loginstate={isLogged}/>
            </Grid>
        </Grid>
  );
}

export default Home;