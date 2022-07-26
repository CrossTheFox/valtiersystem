import './App.css';
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useState, useEffect, useRef} from "react";
import { logout } from './redux/actions/loginActions.js';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

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
import { styled } from '@mui/material/styles';

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

const FooterButton = styled(Button)(({ theme }) => ({
    borderRadius: 35,
    borderColor: "#ff3865",
    color: "#ff3865",
    '&:hover': {
        backgroundColor: '#72002d',
        borderColor: "#ff3865",
    },
  }));

function App() {

  const dispatch = useDispatch();
  const isLogged = useSelector((store) => store.authReducer.isLogged);

  const handleLogout = (e) => {
    dispatch(logout());
  }

  console.log(isLogged);

  return (
    <div id='Main'>
        <Router>
            <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                minHeight: '100vh',
            }}
            >
            <Navigation />
            <Box sx={{
                    m: 4,
                }}>
            <Routes>
                <Route path='/' element={<Body loginstate={isLogged}/>}/>
                <Route path='/compendio' element={<Compendio/>}/>
                <Route path='/creador' element={<Convertidor/>}/>
                <Route path='/personajes' element={<Personajes/>}/>
            <Route path='/characterCreator' element={<CharCreator/>}/>
            </Routes>
            </Box>
          <Box
            component="footer"
            id="Footer"
            sx={{
              py: 3,
              px: 2,
              mt: 'auto',
            }}
          >
            <Container maxWidth>
                <Grid container spacing={12} rowSpacing={4} direction="row" justifyContent="center" alignItems="center">
                    <Grid item lg={4} xs={12}>
                        <Link as={Link} to='/'>
                            <img src='/LogoNegritas.png' width={200} alt='Valtierlogo'/>
                        </Link>
                    </Grid>
                    <Grid item lg={4} xs={12}>
                        <Grid container spacing={2}>
                            <Grid item xs={12}>
                                <Link as={Link} to="/compendio">
                                    <FooterButton variant="outlined">Compendio</FooterButton>
                                </Link>
                            </Grid>
                            <Grid item xs={12}>
                                <Link as={Link} to="/personajes">
                                <FooterButton variant="outlined">Personajes</FooterButton>
                                </Link>
                            </Grid>
                            <Grid item xs={12}>
                                <Link as={Link} to="/creador">
                                    <FooterButton variant="outlined">Creador de Contenido</FooterButton>
                                </Link>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item lg={4} xs={12}>
                        <Grid container spacing={2}>
                            <Grid item xs={6} lg={12}>
                                <Stack direction="row" spacing={2} justifyContent="flex-start" alignItems="center">
                                    <IconButton href="https://www.instagram.com/butcherz0ne/" target="_blank">
                                        <Avatar alt="ButcherZone" src="/LizheruPic.jpg"/>
                                    </IconButton>
                                    <Typography variant="overline" display="block" gutterBottom>Art Designer</Typography>
                                </Stack>
                            </Grid>
                            <Grid item xs={6} lg={12}>
                                <Stack direction="row" spacing={2} justifyContent="flex-start" alignItems="center">
                                    <IconButton href="https://www.instagram.com/the_fox_cross/" target="_blank">
                                        <Avatar alt="CrossFox" src="/CrossElegante.jpg"/>
                                    </IconButton>
                                    <Typography variant="overline" display="block" gutterBottom>Web Programmer</Typography>
                                </Stack>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Container>
          </Box>
        </Box>
      </Router>
    </div>
  );
}

export default App;
