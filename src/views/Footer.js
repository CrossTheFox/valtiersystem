import * as React from 'react';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import PersonIcon from '@mui/icons-material/Person';
import { useWindowSize } from './../App.js';

const Footer = (loginstate) => {

    const size = useWindowSize();
    
    const newWindowSIze = Math.abs(573 - size.height);
    console.log(size);
    console.log(newWindowSIze);

    return(
            <Box id='Footer' sx={{
                //paddingTop: newWindowSIze+"px",
            }}>
                <Container maxWidth='lg' >
                    <Grid container spacing={1} justifyContent="center" alignItems="center">
                        <Grid item xs={12} sm={4}>
                            <Button id="Button1" variant="contained" size="small" startIcon={<PersonIcon/>}>Registrarse</Button>
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            Datos Generales
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <IconButton href="https://www.instagram.com/butcherz0ne/" target="_blank">
                                <Avatar alt="ButcherZone" src="/LizheruPic.jpg"/>
                            </IconButton>
                        </Grid>
                    </Grid>
                </Container>
            </Box>
    );
}

export default Footer;