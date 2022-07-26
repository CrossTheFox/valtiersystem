import * as React from 'react';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import ButtonGroup from '@mui/material/ButtonGroup';
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';
import Tooltip, { tooltipClasses } from '@mui/material/Tooltip';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import PersonIcon from '@mui/icons-material/Person';
import { createTheme, ThemeProvider, styled } from '@mui/material/styles';
import { useWindowSize } from '../App';

import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
  } from 'react-router-dom';
  
  const BigButtonTooltip = styled(({ className, ...props }) => (
    <Tooltip {...props} classes={{ popper: className }} />
  ))(({ theme }) => ({
    [`& .${tooltipClasses.tooltip}`]: {
      backgroundColor: '#ffaeae',
      color: 'rgba(0, 0, 0, 0.87)',
      maxWidth: 235,
      fontSize: theme.typography.pxToRem(12),
      border: '1px solid #d89393',
    },
  }));

  const HugeButton = styled(Button)(({ theme }) => ({
    color: '#fff',
    backgroundColor: '#d45b47',
    width: '100%',
    [theme.breakpoints.down('md')]: {
        height: '30vh',
      },
    height: '50vh',
    '&:hover': {
      backgroundColor: '#b54e3d',
    },
  }));

const Body = (loginstate) => {
    return(
            <Container fixed component="main">
                <Grid container spacing={4} justifyContent="center" alignItems="center">
                    <Grid item xs={6} lg={4}>
                    <BigButtonTooltip
                            title={
                            <React.Fragment>
                                <Typography color="inherit"><b>Compendio</b></Typography>
                                {"Información sobre "} <b>{'Habilidades'}</b> {", "} <b>{'Clases'}</b>
                                {", "} <b>{'Traits'}</b> {" y todo lo referente a "} <b>{'ICON.'}</b>
                            </React.Fragment>
                            }
                            followCursor
                        >
                        <Link as={Link} to="/compendio">
                            <HugeButton variant="contained">
                                <Grid container
                                    direction="column"
                                    justifyContent="center"
                                    alignItems="center"
                                    spacing={2}>
                                    <Grid item>
                                        <img src='/libro_icon.png' width="60%" alt='compendioIcon'/>
                                    </Grid>
                                    <Grid item>
                                        <Typography color="inherit">Compendio</Typography>
                                    </Grid>
                                </Grid>
                            </HugeButton>
                        </Link>
                    </BigButtonTooltip>
                    </Grid>
                    <Grid item xs={6} lg={4}>
                    <BigButtonTooltip
                            title={
                            <React.Fragment>
                                <Typography color="inherit"><b>Personajes</b></Typography>
                                {"Creación y administración de tus "} <b>{'Personajes'}</b>
                                {" creados, tanto jugables cómo "} <b>{'NPCs.'}</b>
                            </React.Fragment>
                            }
                            followCursor
                        >
                        <Link as={Link} to="/personajes">
                            <HugeButton variant="contained">
                                <Grid container
                                    direction="column"
                                    justifyContent="center"
                                    alignItems="center"
                                    spacing={2}>
                                    <Grid item>
                                        <img src='/character_icon.png' width="60%" alt='characterIcon'/>
                                    </Grid>
                                    <Grid item>
                                        <Typography color="inherit">Personajes</Typography>
                                    </Grid>
                                </Grid>
                            </HugeButton>
                        </Link>
                    </BigButtonTooltip>
                    </Grid>
                    <Grid item xs={6} lg={4}>
                    <BigButtonTooltip
                            title={
                            <React.Fragment>
                                <Typography color="inherit"><b>Creador de Contenido</b></Typography>
                                {"Herramienta para "} <b>{'DMs'}</b>
                                {" y "} <b>{'jugadores'}</b> {" experimentados que quieran agregar material"}
                                {" único y Hombebrew a sus partidas y campañas."}
                            </React.Fragment>
                            }
                            followCursor
                        >
                        <Link as={Link} to="/creador">
                            <HugeButton variant="contained" id='GroupButtons'>
                                <Grid container
                                    direction="column"
                                    justifyContent="center"
                                    alignItems="center"
                                    spacing={2}>
                                    <Grid item>
                                        <img src='../pluma_icon.png' width="60%" alt='creatorIcon'/>
                                    </Grid>
                                    <Grid item>
                                        <Typography color="inherit">Creador de Contenido</Typography>
                                    </Grid>
                                </Grid>
                            </HugeButton>
                        </Link>
                    </BigButtonTooltip>
                    </Grid>
                </Grid>
            </Container>
    );
}

export default Body;