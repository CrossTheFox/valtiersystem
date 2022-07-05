import * as React from 'react';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import ButtonGroup from '@mui/material/ButtonGroup';
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import PersonIcon from '@mui/icons-material/Person';
import { createTheme, ThemeProvider, styled } from '@mui/material/styles';

import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
  } from 'react-router-dom';


const HugeButton = styled(Button)(({ theme }) => ({
    color: '#fff',
    backgroundColor: '#d45b47',
    maxWidth: '360px', 
    maxHeight: '360px', 
    minWidth: '360px', 
    minHeight: '360px',
    '&:hover': {
      backgroundColor: '#b54e3d',
    },
  }));
  
  const HalfHugeButton = styled(Button)(({ theme }) => ({
    color: '#fff',
    backgroundColor: '#d45b47',
    maxWidth: '360px', 
    maxHeight: '180px', 
    minWidth: '360px', 
    minHeight: '179px',
    '&:hover': {
      backgroundColor: '#b54e3d',
    },
  }));

const Body = (loginstate) => {
    return(
        <Box id="Body">
            <Container fixed>
                <Grid container spacing={0} justifyContent="center" alignItems="center">
                    <Grid item xs={6} lg={4}>
                        <Link as={Link} to="/compendio">
                            <HugeButton variant="contained">Compendio</HugeButton>
                        </Link>
                    </Grid>
                    <Grid item xs={6} lg={4}>
                        <Link as={Link} to="/personajes">
                            <HugeButton variant="contained">Personajes</HugeButton>
                        </Link>
                    </Grid>
                    <Grid item xs={12} lg={4}>
                        
                        <ButtonGroup
                            variant="contained"
                            orientation="vertical"
                            aria-label="vertical outlined button group"
                            style={{
                                width: '360px', 
                            }}
                            fullWidth
                            >
                            <Link as={Link} to="/campana" id='LinkDesign'>
                                <HalfHugeButton variant="contained" id='GroupButtons'>Campaña</HalfHugeButton>
                            </Link>
                            <Link as={Link} to="/convertidor" id='LinkDesign'>
                                <HalfHugeButton variant="contained" id='GroupButtons'>Convertidor</HalfHugeButton>
                            </Link>
                        </ButtonGroup>
                        
                    </Grid>
                </Grid>
            </Container>
        </Box>  
    );
}

export default Body;