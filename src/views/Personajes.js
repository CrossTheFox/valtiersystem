import * as React from 'react';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import PersonIcon from '@mui/icons-material/Person';
import Typography from '@mui/material/Typography';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import HomeIcon from '@mui/icons-material/Home';
import WhatshotIcon from '@mui/icons-material/Whatshot';
import GrainIcon from '@mui/icons-material/Grain';

import { createTheme, ThemeProvider, styled } from '@mui/material/styles';
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
  } from 'react-router-dom';

const ConverterButton = styled(Button)(({ theme }) => ({
    color: '#fff',
    backgroundColor: '#d45b47',
    maxWidth: '50%', 
    maxHeight: '100%', 
    minWidth: '50%', 
    minHeight: '100%',
    '&:hover': {
      backgroundColor: '#b54e3d',
    },
}));



const Personajes = () => {
    return(
        <Container>
            <Grid container spacing={0} id="SpaceBRows" justifyContent="center" alignItems="center">
                <Grid item xs={12} lg={12}>
                    {/* Aqui vamos a colocar un Map con TODOS los personajes que hay*/}
                </Grid>
                <Grid item xs={12} lg={12}>
                    <Link as={Link} to="/characterCreator">
                        <ConverterButton variant="contained">
                            <AddIcon sx={{ mr: 0.5 }} fontSize="inherit"/>
                            Nuevo Personaje
                        </ConverterButton>
                    </Link>
                </Grid>
            </Grid>
        </Container>
    );
}

export default Personajes;