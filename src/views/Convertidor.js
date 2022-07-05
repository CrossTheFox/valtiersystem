import * as React from 'react';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import FormHelperText from '@mui/material/FormHelperText';
import TextField from '@mui/material/TextField';
import Checkbox from '@mui/material/Checkbox';
import FormLabel from '@mui/material/FormLabel';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Slider from '@mui/material/Slider';
import Stack from '@mui/material/Stack';


import AddCircleIcon from '@mui/icons-material/AddCircle';
import SickIcon from '@mui/icons-material/Sick';
import PsychologyIcon from '@mui/icons-material/Psychology';
import ButtonGroup from '@mui/material/ButtonGroup';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Avatar from '@mui/material/Avatar';
import PersonIcon from '@mui/icons-material/Person';
import { createTheme, ThemeProvider, styled } from '@mui/material/styles';
import { useState, useEffect } from "react";

import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
  } from 'react-router-dom';
import { sizeHeight } from '@mui/system';
import { useWindowSize } from './../App.js';
import { Typography } from '@mui/material';

const ConverterButton = styled(Button)(({ theme }) => ({
    color: '#fff',
    backgroundColor: '#d45b47',
    maxWidth: '100%', 
    maxHeight: '100%', 
    minWidth: '100%', 
    minHeight: '100%',
    '&:hover': {
      backgroundColor: '#b54e3d',
    },
}));

const ClickedButton = styled(Button)(({ theme }) => ({
    color: '#fff',
    backgroundColor: '#ff3865',
    maxWidth: '100%', 
    maxHeight: '100%', 
    minWidth: '100%', 
    minHeight: '100%',
    '&:hover': {
      backgroundColor: '#9c233f',
    },
}));

const IconSlider = styled(Slider)({
  color: '#ff3865',
  height: 8,
  '& .MuiSlider-track': {
    border: 'none',
  },
  '& .MuiSlider-thumb': {
    height: 24,
    width: 24,
    border: '2px solid currentColor',
    '&:focus, &:hover, &.Mui-active, &.Mui-focusVisible': {
      boxShadow: 'inherit',
    },
    '&:before': {
      display: 'none',
    },
  },
  '& .MuiSlider-valueLabel': {
    lineHeight: 1.2,
    fontSize: 12,
    background: 'unset',
    padding: 0,
    width: 32,
    height: 32,
    borderRadius: '50% 50% 50% 0',
    backgroundColor: '#95223c',
    transformOrigin: 'bottom left',
    transform: 'translate(50%, -100%) rotate(-45deg) scale(0)',
    '&:before': { display: 'none' },
    '&.MuiSlider-valueLabelOpen': {
      transform: 'translate(50%, -100%) rotate(-45deg) scale(1)',
    },
    '& > *': {
      transform: 'rotate(45deg)',
    },
  },
});
  

const Convertidor = (loginstate) => {

    const [dataType, setData] = React.useState('');
    const [abilityTittle, setAbTittle] = React.useState('');
    const [actionType, setActionType] = React.useState('');
    const [attackType, setattackType] = React.useState('');
    const [attackTypeRange, setattackTypeRange] = React.useState('');
    const [attackRange, setattackRange] = React.useState('');
    const [abilitytext, setabilitytext] = React.useState('');
    const [aditionalAttack, setaditionalAttack] = React.useState('');
    const [classType, setclassType] = React.useState('');
    const [contador, setContador] = React.useState(0);
    const [BPcontador, setBPcontador] = React.useState(0);
    const [aoeAttackType, setaoeAttackType] = React.useState('');
    const [aoeAttack, setaoeAttack] = React.useState(true);
    const [aoeAttackValue, setaoeAttackValue] = React.useState('');
    const [extraAbilities, setextraAbilities] = React.useState({
        Aura: false,
        Autohit: false,
        Combo: false,
        Mark: false,
        Stance: false,
        Summon: false,
        Terrain: false,
    });
    const { Aura, Autohit, Combo, Mark, Stance, Summon, Terrain } = extraAbilities;
    const actions = ["Sneak", "Traverse", "Survey", "Study", "Charm", "Command", "Tinker", "Excel", "Smash", "Endure", "Channel", "Recall"];

    let componente_bp = [];

    const [bondClass, setbondClass] = React.useState({
        bondName: "",
        bondDes: "",
        bondBonus1: "",
        bondBonus2: "",
        ideals:{
            I1: "",
            I2: "",
            I3: ""
            },
        maxStress: 1,
        StressRelief: "",
        StressSpecial: "",
        Harm: 1,
        BondPowers: {
            BP1: "", BP2: "", BP3: "", BP4: "", BP5: "", BP6: "", BP7: "", BP8: "",
            BP9: "", BP10: "", BP11: ""
            
        }
    });
    
    const size = useWindowSize();

    const handleType = (event) => {
        setData(event.target.value);
    };

    const handleAbTittle = (event) => {
        setAbTittle(event.target.value);
    };

    const handleActionType = (event) => {
        setActionType(event.target.value);
    };

    const handleattackType = (event) => {
        setattackType(event.target.value);
    }

    const handleattackTypeRange = (event) => {
        setattackTypeRange(event.target.value);
    }

    const handleattackRange = (event) => {
        setattackRange(event.target.value);
    }

    const handleabilitytext = (event) => {
        setabilitytext(event.target.value);
    }

    const handleaditionalAttack = (event) => {
        setaditionalAttack(event.target.value);
    }

    const handleclassType = (event) => {
        setclassType(event.target.value)
    }

    const handleUpContador = () => {
        setContador(count => count + 1);
        setBPcontador("BP"+(contador+1));
    }

    const handleResetContador = () => {
        setContador(0)
    }

    const handleaoeAttack = (event) => {
        setaoeAttack(event.target.checked)
    }

    const handleaoeAttackType = (event) => {
        setaoeAttackType(event.target.value)
    }

    const handleaoeAttackValue = (event) => {
        setaoeAttackValue(event.target.value)
    }

    const handleextraAbilities = (event) => {
        setextraAbilities({
            ...extraAbilities,
            [event.target.name]: event.target.checked
        })
    }

    const handlebondClass = (event) => {
        setbondClass({
            ...bondClass,
            [event.target.name]: event.target.value
        })
    }

    const handleBondSubClass = (event) => {
        setbondClass({
            ...bondClass,
            ["ideals"]: {...bondClass.ideals, [event.target.name]: event.target.value}
        });
    }

    const handleBondPowers = (event) => {
        let bptarget = event.target.name;
        let bpvalue = event.target.value;
        setbondClass({
            ...bondClass,
            ["BondPowers"]: 
                {...bondClass.BondPowers, [bptarget]: bpvalue
            }
        });
    }

    const exportData = () => {
        const jsonString = `data:text/json;chatset=utf-8,${encodeURIComponent(
          JSON.stringify(bondClass)
        )}`;
        const link = document.createElement("a");
        link.href = jsonString;
        link.download = "btype_"+bondClass.bondName+".json";
        link.click();
      };

    for (let i = 1; i <= contador; i++) {
        if (i == 11) {
            componente_bp.push(
                <Grid item xs={12} lg={6}>
                    <Box component="form" autoComplete="off">
                        <TextField
                            id="filled-multiline-flexible"
                            fullWidth
                            multiline 
                            required
                            label={"Gambit Name"}
                            maxRows={2}
                            rows={2}
                            name={"BP"+i}
                            helperText="Nombre del Gambito - Poderes Requeridos - Descripción"
                            value={bondClass.BondPowers.BPcontador}
                            onChange={handleBondPowers}
                        />
                    </Box>
                </Grid>
            )
        }
        else {
            componente_bp.push(
                <Grid item xs={12} lg={12}>
                    <Box component="form" autoComplete="off">
                        <TextField
                            id="filled-multiline-flexible"
                            fullWidth
                            multiline  
                            required
                            maxRows={2}
                            rows={2}
                            label={"Bond Power "+i}
                            name={"BP"+i}
                            helperText="NombreBondPower - opcional(Veces Por sesión) - Descripción"
                            value={bondClass.BondPowers.BPcontador}
                            onChange={handleBondPowers}
                        />
                    </Box>
                </Grid>
            )
        }
    }

    return(
        <Box id="Body">
            <Container fixed>
                {size.width <= 640 ? (
                    <Grid container spacing={0} justifyContent="center" alignItems="center" id="SpaceBRows">
                        <Grid item xs={12} lg={12}>
                            <FormControl fullWidth required>
                                <InputLabel id="demo-simple-select-label">Tipo de Dato</InputLabel>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    value={dataType}
                                    label="Tipo de Dato"
                                    onChange={handleType}
                                >
                                <MenuItem value={1}>Habilidad</MenuItem>
                                <MenuItem value={2}>Trait</MenuItem>
                                <MenuItem value={3}>Limit Breaker</MenuItem>
                                <MenuItem value={4}>Bond</MenuItem>
                                </Select>
                                <FormHelperText>Escoja el tipo de Dato a Convertir</FormHelperText>
                            </FormControl>
                        </Grid>
                    </Grid>
                ) : (
                    <Grid container spacing={4} justifyContent="center" alignItems="center" id="SpaceBRows">
                        <Grid item lg={3} md={3} xs={3} sm={3}>
                            {dataType == 1 ? (
                                <ClickedButton variant="contained" value={1} onClick={handleType}>Habilidad</ClickedButton>
                            ) : (
                                <ConverterButton variant="contained" value={1} onClick={handleType}>Habilidad</ConverterButton>
                            )}
                        </Grid>
                        <Grid item lg={3} md={3} xs={3} sm={3}>
                            {dataType == 2 ? (
                                <ClickedButton variant="contained" value={2} onClick={handleType}>Trait</ClickedButton>
                            ) : (
                                <ConverterButton variant="contained" value={2} onClick={handleType}>Trait</ConverterButton>
                            )}
                        </Grid>
                        <Grid item lg={3} md={3} xs={3} sm={3}>
                            {dataType == 3 ? (
                                <ClickedButton variant="contained" value={3} onClick={handleType}>Limit Breaker</ClickedButton>
                            ) : (
                                <ConverterButton variant="contained" value={3} onClick={handleType}>Limit Breaker</ConverterButton>
                            )}
                        </Grid>
                        <Grid item lg={3} md={3} xs={3} sm={3}>
                            {dataType == 4 ? (
                                <ClickedButton variant="contained" value={4} onClick={handleType}>Bond Power</ClickedButton>
                            ) : (
                                <ConverterButton variant="contained" value={4} onClick={handleType}>Bond Power</ConverterButton>
                            )}
                        </Grid>
                    </Grid>
                )}

                {/*----------------------------------------------Tipo Convertidor (HABILIDAD)--------------------------------------*/}
                
                    {dataType == 1 && (
                        <Grid container spacing={4}>
                            <Grid item xs={12} lg={4}>
                                <Box component="form" autoComplete="off">
                                    <TextField
                                        fullWidth 
                                        required
                                        id="outlined-multiline-flexible"
                                        label="Nombre Habilidad"
                                        helperText="Dale un nombre interesante a tu poder"
                                        multiline
                                        maxRows={4}
                                        value={abilityTittle}
                                        onChange={handleAbTittle}
                                    />
                                    <div>{abilityTittle}</div>
                                </Box>
                            </Grid>
                            <Grid item xs={6} lg={4}>
                                <FormControl fullWidth required>
                                    <InputLabel id="demo-simple-select-label">Tipo de Acción</InputLabel>
                                    <Select
                                        labelId="demo-simple-select-label"
                                        id="demo-simple-select"
                                        value={actionType}
                                        label="Tipo de Acción"
                                        onChange={handleActionType}
                                    >
                                    <MenuItem value={1}>Ataque</MenuItem>
                                    <MenuItem value={2}>Acción</MenuItem>
                                    <MenuItem value={3}>Interrupt</MenuItem>
                                    </Select>
                                    <FormHelperText>Selecciona la naturaleza de tu Habilidad</FormHelperText>
                                    <div>{actionType}</div>
                                </FormControl>
                            </Grid>
                        
                        
                            {/*-----------------Tipo Habilidad (ATAQUE)----------------------------------------------------*/}

                            {actionType == 1 && (
                                <Grid item xs={6} lg={4}>
                                    <FormControl fullWidth required>
                                        <InputLabel id="demo-simple-select-label">Tipo de Ataque</InputLabel>
                                        <Select
                                            labelId="demo-simple-select-label"
                                            id="demo-simple-select"
                                            value={attackType}
                                            label="Tipo de Ataque"
                                            onChange={handleattackType}
                                        >
                                        <MenuItem value={1}>Light</MenuItem>
                                        <MenuItem value={2}>Heavy</MenuItem>
                                        <MenuItem value={3}>SuperHeavy</MenuItem>
                                        </Select>
                                        <FormHelperText>Selecciona el poder de tu Ataque</FormHelperText>
                                        <div>{attackType}</div>
                                    </FormControl>
                                </Grid>
                            )}

                            {actionType == 1 && (
                                <Grid item xs={6} lg={2}>
                                    <FormControl fullWidth required>
                                        <InputLabel id="demo-simple-select-label">Melee o Rango</InputLabel>
                                        <Select
                                            labelId="demo-simple-select-label"
                                            id="demo-simple-select"
                                            value={attackTypeRange}
                                            label="Melee o Rango"
                                            onChange={handleattackTypeRange}
                                        >
                                        <MenuItem value={1}>Melee</MenuItem>
                                        <MenuItem value={2}>Range</MenuItem>
                                        </Select>
                                        <FormHelperText></FormHelperText>
                                        <div>{attackTypeRange}</div>
                                    </FormControl>
                                </Grid>
                            )}
                            {actionType == 1 && (
                                <Grid item xs={6} lg={2}>
                                    <Box component="form" autoComplete="off">
                                        <TextField
                                            fullWidth 
                                            required
                                            id="outlined-multiline-flexible"
                                            label="Rango de Ataque"
                                            helperText="El Numero de Casillas que abarca el ataque"
                                            value={attackRange}
                                            onChange={handleattackRange}
                                        />
                                        <div>{attackRange}</div>
                                    </Box>
                                </Grid>
                            )}
                            {actionType == 1 && (
                                <Grid item xs={2} lg={1}>
                                    <TextField
                                        id="outlined-read-only-input"
                                        label="Daño"
                                        value={attackType.toString()+"[D]"}
                                        InputProps={{
                                            readOnly: true,
                                        }}
                                    />
                                </Grid>
                            )}
                            {actionType == 1 && (
                                <Grid item xs={10} lg={3}>
                                    <Box component="form" autoComplete="off">
                                        <TextField
                                            fullWidth 
                                            id="outlined-multiline-flexible"
                                            label="Adicional al Daño Base"
                                            helperText="Escribe los efectos y daños adicionales o calculos diferentes"
                                            multiline
                                            maxRows={4}
                                            value={aditionalAttack}
                                            onChange={handleaditionalAttack}
                                        />
                                        <div>{aditionalAttack}</div>
                                    </Box>
                                </Grid>
                            )}
                            {actionType == 1 && (
                                <Grid item xs={6} lg={4}>
                                    <FormControlLabel
                                        control={
                                            <Checkbox checked={aoeAttack} onChange={handleaoeAttack} name="Ataque En Area" />
                                        }
                                        label="Ataque En Area"
                                    />
                                </Grid>
                            )}
                            {aoeAttack == true && actionType == 1 && (
                                <Grid item xs={6} lg={4}>
                                    <FormControl fullWidth required>
                                        <InputLabel id="demo-simple-select-label">Tipo de Ataque en Area</InputLabel>
                                        <Select
                                            labelId="demo-simple-select-label"
                                            id="demo-simple-select"
                                            value={aoeAttackType}
                                            label="Tipo de Ataque en Area"
                                            onChange={handleaoeAttackType}
                                        >
                                        <MenuItem value={1}>Line</MenuItem>
                                        <MenuItem value={2}>Blast</MenuItem>
                                        <MenuItem value={3}>Close Blast</MenuItem>
                                        <MenuItem value={4}>Arc</MenuItem>
                                        <MenuItem value={5}>Cross</MenuItem>
                                        </Select>
                                        <FormHelperText>Elige de qué modo hace daño en area tu ataque</FormHelperText>
                                        <div>{aoeAttackType}</div>
                                    </FormControl>
                                </Grid>
                            )}
                            {aoeAttack == false && actionType == 1 && (
                                <Grid item xs={6} lg={4}>
                                    <FormControl fullWidth disabled>
                                        <InputLabel id="demo-simple-select-label">Tipo de Ataque en Area</InputLabel>
                                        <Select
                                            labelId="demo-simple-select-label"
                                            id="demo-simple-select"
                                            value={aoeAttackType}
                                            label="Tipo de Ataque en Area"
                                            onChange={handleaoeAttackType}
                                        >
                                        <MenuItem value={1}>Line</MenuItem>
                                        <MenuItem value={2}>Blast</MenuItem>
                                        <MenuItem value={3}>Close Blast</MenuItem>
                                        <MenuItem value={4}>Arc</MenuItem>
                                        <MenuItem value={5}>Cross</MenuItem>
                                        </Select>
                                        <FormHelperText>Elige de qué modo hace daño en area tu ataque</FormHelperText>
                                        <div>{aoeAttackType}</div>
                                    </FormControl>
                                </Grid>
                            )}
                            {aoeAttack == true && actionType == 1 && (
                                <Grid item xs={6} lg={4}>
                                    <Box component="form" autoComplete="off">
                                        <TextField
                                            fullWidth 
                                            id="outlined-multiline-flexible"
                                            label="Rango de AOE"
                                            helperText="Rango del Area de Efecto"
                                            value={aoeAttackValue}
                                            onChange={handleaoeAttackValue}
                                        />
                                        <div>{aoeAttackValue}</div>
                                    </Box>
                                </Grid>
                            )}
                            {aoeAttack == false && actionType == 1 && (
                                <Grid item xs={6} lg={4}>
                                    <Box component="form" autoComplete="off">
                                        <TextField
                                            disabled
                                            fullWidth 
                                            id="outlined-multiline-flexible"
                                            label="Rango de AOE"
                                            helperText="Rango del Area de Efecto"
                                            value={aoeAttackValue}
                                            onChange={handleaoeAttackValue}
                                        />
                                        <div>{aoeAttackValue}</div>
                                    </Box>
                                </Grid>
                            )}
                            <Grid item xs={12} lg={8}>
                                <TextField
                                    id="filled-multiline-flexible"
                                    label="Descripción de Efectos"
                                    fullWidth
                                    multiline
                                    helperText="Describe tu habilidad con detalle, recuerda utilizar las Palabras Reservadas"
                                    maxRows={4}
                                    value={abilitytext}
                                    onChange={handleabilitytext}
                                    variant="filled"
                                />
                            </Grid>
                           <Grid item xs={6} lg={4}>
                                <FormControl fullWidth required>
                                    <InputLabel id="demo-simple-select-label">Clase</InputLabel>
                                    <Select
                                        labelId="demo-simple-select-label"
                                        id="demo-simple-select"
                                        value={classType}
                                        label="Clase"
                                        onChange={handleclassType}
                                    >
                                    <MenuItem value={1}>Stalwart</MenuItem>
                                    <MenuItem value={2}>Vagabond</MenuItem>
                                    <MenuItem value={3}>Mendicant</MenuItem>
                                    <MenuItem value={4}>Wright</MenuItem>
                                    <MenuItem value={5}>Homebrew y Otros...</MenuItem>
                                    </Select>
                                    <FormHelperText>Seleccione a qué clase pertenece la habilidad</FormHelperText>
                                    <div>{classType}</div>
                                </FormControl>
                           </Grid>
                           <Grid item xs={12} lg={8}>

                                <FormLabel component="legend">Lista de Efectos Especiales</FormLabel>
                                <FormControlLabel
                                    control={
                                    <Checkbox checked={Aura} onChange={handleextraAbilities} name="Aura" />
                                    }
                                    label="Aura"
                                />
                                <FormControlLabel
                                    control={
                                    <Checkbox checked={Autohit} onChange={handleextraAbilities} name="Autohit" />
                                    }
                                    label="Autohit"
                                />
                                <FormControlLabel
                                    control={
                                    <Checkbox checked={Combo} onChange={handleextraAbilities} name="Combo" />
                                    }
                                    label="Combo"
                                />
                                <FormControlLabel
                                    control={
                                    <Checkbox checked={Mark} onChange={handleextraAbilities} name="Mark" />
                                    }
                                    label="Mark"
                                />
                                <FormControlLabel
                                    control={
                                    <Checkbox checked={Stance} onChange={handleextraAbilities} name="Stance" />
                                    }
                                    label="Stance"
                                />
                                <FormControlLabel
                                    control={
                                    <Checkbox checked={Summon} onChange={handleextraAbilities} name="Summon" />
                                    }
                                    label="Summon"
                                />
                                <FormControlLabel
                                    control={
                                    <Checkbox checked={Terrain} onChange={handleextraAbilities} name="Terrain" />
                                    }
                                    label="Terrain"
                                />
                                <FormHelperText>Escoja qué Efectos Especiales tiene su habilidad</FormHelperText>

                           </Grid>
                        </Grid>
                    )}
                    {dataType == 2 && (
                        <div>Se Eligio Trait</div>
                    )}
                    {dataType == 3 && (
                        <div>Se Eligio Limit Breaker</div>
                    )}
                    {dataType == 4 && (
                        <Grid container spacing={1} id="SpaceBRows" justifyContent="flex-start" alignItems="flex-start">
                            <Grid item xs={12} lg={4}>
                                <Box component="form" autoComplete="off">
                                    <TextField
                                        fullWidth 
                                        required
                                        id="outlined-multiline-flexible"
                                        label="Nombre del Bond"
                                        helperText="Dale un nombre interesante al Bond"
                                        name="bondName"
                                        value={bondClass.bondName}
                                        onChange={handlebondClass}
                                    />
                                </Box>
                            </Grid>
                            <Grid item xs={6} lg={4}>
                                <FormControl fullWidth required>
                                    <InputLabel id="demo-simple-select-label">Aumento Acción 1</InputLabel>
                                    <Select
                                        labelId="demo-simple-select-label"
                                        id="demo-simple-select"
                                        name="bondBonus1"
                                        value={bondClass.bondBonus1}
                                        label="Aumento Acción 1"
                                        onChange={handlebondClass}
                                    >
                                    {actions.map(
                                        (action) => action !== bondClass.bondBonus2 && (
                                            <MenuItem value={action}>{action}</MenuItem>
                                        )
                                    )}
                                    
                                    </Select>
                                    <FormHelperText>Elige la 1era acción basica del Bond</FormHelperText>
                                </FormControl>
                            </Grid>
                            <Grid item xs={6} lg={4}>
                                <FormControl fullWidth required>
                                    <InputLabel id="demo-simple-select-label">Aumento Acción 2</InputLabel>
                                    <Select
                                        labelId="demo-simple-select-label"
                                        id="demo-simple-select"
                                        name="bondBonus2"
                                        value={bondClass.bondBonus2}
                                        label="Aumento Acción 2"
                                        onChange={handlebondClass}
                                    >
                                    {actions.map(
                                        (action) => action !== bondClass.bondBonus1 && (
                                            <MenuItem value={action}>{action}</MenuItem>
                                        )
                                    )}
                                    </Select>
                                    <FormHelperText>Elige la 2da acción basica del Bond</FormHelperText>
                                </FormControl>
                            </Grid>
                        </Grid>
                    )}
                    {dataType == 4 && (
                        <Grid container spacing={4} id="SpaceBRows">
                            <Grid item xs={12} lg={6}>
                                <Grid container spacing={3.3} id="SpaceBRows">
                                    <Grid item xs={12} lg={12}>
                                        <TextField
                                            id="filled-multiline-flexible"
                                            label="Descripción de Bond"
                                            fullWidth
                                            multiline
                                            name="bondDes"
                                            helperText="Da algunos detalles interesantes de la historia detrás del Bond"
                                            rows={5.1}
                                            value={bondClass.bondDes}
                                            onChange={handlebondClass}
                                            variant="filled"
                                        />
                                    </Grid>
                                    <Grid item xs={6} lg={6}>
                                        <Stack alignContent="center">
                                            <Typography
                                                sx={{ display: 'flex', alignItems: 'center' }}
                                                color="text.primary"
                                                >
                                                <PsychologyIcon sx={{ mr: 0.5 }} fontSize="inherit" />
                                                Max. Stress
                                            </Typography>
                                            <IconSlider
                                                aria-label="Max Stress"
                                                defaultValue={1}
                                                valueLabelDisplay="auto"
                                                step={1}
                                                marks
                                                min={1}
                                                max={6}
                                                name="maxStress"
                                                value={bondClass.maxStress}
                                                onChange={handlebondClass}
                                            />
                                        </Stack>
                                    </Grid>
                                    <Grid item xs={6} lg={6}>
                                        <Stack alignContent="center">
                                            <Typography
                                                sx={{ display: 'flex', alignItems: 'center' }}
                                                color="text.primary"
                                                >
                                                <SickIcon sx={{ mr: 0.5 }} fontSize="inherit" />
                                                Max. Harm
                                            </Typography>
                                            <IconSlider
                                                aria-label="Max Harm"
                                                defaultValue={1}
                                                valueLabelDisplay="auto"
                                                step={1}
                                                marks
                                                min={1}
                                                max={5}
                                                name="Harm"
                                                value={bondClass.Harm}
                                                onChange={handlebondClass}
                                            />
                                        </Stack>
                                    </Grid>
                                    <Grid item xs={12} lg={12}>
                                        <TextField
                                            id="filled-multiline-flexible"
                                            label="Stress Relief"
                                            fullWidth
                                            multiline
                                            helperText="Cuanto Stress apacigua tu personaje al realizar una acción particular"
                                            maxRows={3}
                                            value={bondClass.StressRelief}
                                            name="StressRelief"
                                            onChange={handlebondClass}
                                            variant="filled"
                                        />
                                    </Grid>  
                                </Grid>
                            </Grid>

                            <Grid item xs={12} lg={6}>
                                <Grid container spacing={2} id="SpaceBRows">
                                    <Grid item xs={12} lg={12}>
                                        <TextField
                                            id="filled-multiline-flexible"
                                            label="Ideal 1"
                                            fullWidth
                                            multiline
                                            helperText="Ej: Descubrí cosas nuevas de este mundo o probé algo realmente único"
                                            maxRows={4}
                                            value={bondClass.ideals.I1}
                                            name="I1"
                                            onChange={handleBondSubClass}
                                            variant="filled"
                                        />
                                    </Grid>
                                    <Grid item xs={12} lg={12}>
                                        <TextField
                                            id="filled-multiline-flexible"
                                            label="Ideal 2"
                                            fullWidth
                                            multiline
                                            helperText="Ej: Expresé mi historia, creencias y pasado a través de mis acciones"
                                            maxRows={4}
                                            value={bondClass.ideals.I2}
                                            name="I2"
                                            onChange={handleBondSubClass}
                                            variant="filled"
                                        />
                                    </Grid>
                                    <Grid item xs={12} lg={12}>
                                        <TextField
                                            id="filled-multiline-flexible"
                                            label="Ideal 3"
                                            fullWidth
                                            multiline
                                            helperText="Ej: Me enfrenté a los desafios utilizando mi astucia, perspicacia y habilidad"
                                            maxRows={4}
                                            value={bondClass.ideals.I3}
                                            name="I3"
                                            onChange={handleBondSubClass}
                                            variant="filled"
                                        />
                                    </Grid>
                                    <Grid item xs={12} lg={12}>
                                        <TextField
                                            id="filled-multiline-flexible"
                                            label="Stress Special"
                                            fullWidth
                                            multiline
                                            helperText="Algún bonus o mejora de acciones al estar estresado"
                                            maxRows={3}
                                            value={bondClass.StressSpecial}
                                            name="StressSpecial"
                                            onChange={handlebondClass}
                                            variant="filled"
                                        />
                                    </Grid>
                                </Grid>
                            </Grid>

                        </Grid>
                    )}
                    {dataType == 4 && (
                        <Grid container spacing={2} id="SpaceBRows">
                            {contador < 11 && (
                                <Grid item xs={12} lg={12}>
                                    <IconButton id="contadorTotal" aria-label="delete" size="large" onClick={handleUpContador}>
                                        <AddCircleIcon fontSize="inherit" />
                                    </IconButton>
                                    Bond Powers
                                </Grid>
                            )}
                            {componente_bp}
                        </Grid>
                    )}
                    {dataType == 4 && (
                        <Grid container spacing={2} id="SpaceBRows">
                            <Grid item xs={6} ls={6}>
                                <ClickedButton variant="contained" onClick={exportData}>Guardar Bond</ClickedButton>
                            </Grid>
                        </Grid>
                    )}
            </Container>
        </Box>  
    );
}

export default Convertidor;