import './App.css';
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useState, useEffect, useRef} from "react";
import { logout } from './redux/actions/loginActions.js';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from 'react-router-dom';

import Home from './views/Home.js';
import Compendio from './views/Compendio.js';
import Navigation from './views/Navigation.js';
import Footer from './views/Footer.js';
import Body from './views/Body.js';
import Personajes from './views/Personajes.js';
import Campana from './views/Campana.js';
import Convertidor from './views/Convertidor.js';
import CharCreator from './views/CharCreator.js';
import { padding } from '@mui/system';

export const useWindowSize = () => {
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  });

  useEffect(() => {
    function handleResize() {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return windowSize;
}

export const componentWindow = () => {
  const refContainer = useRef();
  const [dimensions, setDimensions] = 
    useState({ width: 0, height: 0 });
  useEffect(() => {
    if (refContainer.current) {
      setDimensions({
        width: refContainer.current.offsetWidth,
        height: refContainer.current.offsetHeight,
      });
    }
  }, []);
  return dimensions;
}

function App() {

  const dispatch = useDispatch();
  const isLogged = useSelector((store) => store.authReducer.isLogged);
  const size = useWindowSize();
  const compSize = componentWindow();

  console.log(compSize);

  const handleLogout = (e) => {
    dispatch(logout());
  }

  console.log(isLogged);

  return (
    <div id='Main'>
      <Router>
        <Grid container rowSpacing={3} flex>
              <Grid item xs={12}>
                  <Navigation loginstate={isLogged}/>
              </Grid>
              
              <Grid item xs={12}>
                  <Routes>
                      <Route path='/' element={<Body loginstate={isLogged}/>}/>
                      <Route path='/compendio' element={<Compendio/>}/>
                      <Route path='/campana' element={<Campana/>}/>
                      <Route path='/convertidor' element={<Convertidor/>}/>
                      <Route path='/personajes' element={<Personajes/>}/>
                      <Route path='/characterCreator' element={<CharCreator/>}/>
                  </Routes>
              </Grid>
              
              <Grid item xs={12} fixed>
                <Footer loginstate={isLogged}/>
              </Grid>
          </Grid>
      </Router>
    </div>
  );
}

export default App;
