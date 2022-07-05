import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import { useSelector, useDispatch } from 'react-redux';
import { Grid } from '@mui/material';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from 'react-router-dom';

const settings = ['Perfil', 'Backup Data', 'Cerrar Sesión'];

const Navigation = (loginstate) => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const dispatch = useDispatch();
  const isLogged = useSelector((store) => store.authReducer.isLogged);

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
      <Container maxWidth="xl" id="Navigation">
        <Box>
          <Grid container spacing={0}>
          <Grid item xs={10}>
              <Link as={Link} to='/'>
                <img src='/LogoNormal.png' width={200} alt='Valtierlogo'/>
              </Link>
            </Grid>
            <Grid item xs={2}>
              {isLogged === false && (
              <Box>
                <Tooltip title="Open settings">
                  <IconButton onClick={handleOpenUserMenu}>
                    <Avatar 
                      alt="Remy Sharp" 
                      src="/static/images/avatar/2.jpg" 
                      sx={{ width: 65, height: 65 }}
                    />
                  </IconButton>
                </Tooltip>
                <Menu
                  sx={{ mt: '45px' }}
                  id="menu-appbar"
                  anchorEl={anchorElUser}
                  anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  open={Boolean(anchorElUser)}
                  onClose={handleCloseUserMenu}
                >
                {settings.map((setting) => (
                  <MenuItem key={setting} onClick={handleCloseUserMenu}>
                    <Typography textAlign="center">{setting}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>)}
            </Grid>
          </Grid>
        </Box>
      </Container>
    
  );
};

export default Navigation;