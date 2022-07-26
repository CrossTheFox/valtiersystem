import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
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
      <Container maxWidth id="Father_Nav">
        <Stack direction="row">
            <Box width="100%" id="Navigation">
                <Link as={Link} to='/'>
                    <img src='/LogoNormal.png' width={200} alt='Valtierlogo'/>
                </Link>
            </Box>
            <Box id="Navigation-Cont">
            </Box>
        </Stack>
      </Container>
    
  );
};

export default Navigation;