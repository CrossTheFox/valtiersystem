import * as React from 'react';
import * as BondsJson from './jsons/Bonds.json';

import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Paper from '@mui/material/Paper';

import RecordVoiceOverIcon from '@mui/icons-material/RecordVoiceOver';
import PeopleIcon from '@mui/icons-material/People';
import BadgeIcon from '@mui/icons-material/Badge';
import GpsFixedIcon from '@mui/icons-material/GpsFixed';
import LocationSearchingIcon from '@mui/icons-material/LocationSearching';

import Tooltip, { tooltipClasses } from '@mui/material/Tooltip';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import FormHelperText from '@mui/material/FormHelperText';
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';
import Rating from '@mui/material/Rating';
import Checkbox from '@mui/material/Checkbox';
import FormLabel from '@mui/material/FormLabel';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';

import { createTheme, ThemeProvider, styled } from '@mui/material/styles';
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link as routerLink
  } from 'react-router-dom';
import { width } from '@mui/system';

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

const BondButton = styled(Button)(({ theme }) => ({
    color: '#fff',
    backgroundColor: '#d45b47',
    maxWidth: 120, 
    maxHeight: 300, 
    minWidth: 120, 
    minHeight: 300,
    '&:hover': {
      backgroundColor: '#b54e3d',
    },
}));

const HalfBondButton = styled(Button)(({ theme }) => ({
    color: '#fff',
    backgroundColor: '#d45b47',
    maxWidth: 120, 
    maxHeight: 150, 
    minWidth: 120, 
    minHeight: 150,
    '&:hover': {
      backgroundColor: '#b54e3d',
    },
    "&.Mui-disabled": {
        backgroundColor: '#b7766b',
      }
}));

const InformationTooltip = styled(({ className, ...props }) => (
    <Tooltip {...props} classes={{ popper: className }} />
  ))(({ theme }) => ({
    [`& .${tooltipClasses.tooltip}`]: {
      backgroundColor: 'transparent',
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
 

const ValtierTextField = styled(TextField)({
    /*
    '& label.Mui-focused': {
      color: 'green',
    },
    */
    /*
    '& .MuiInput-underline:after': {
      borderBottomColor: 'green',
    },
    */

    '& .MuiOutlinedInput-root': {
    /*
      '& fieldset': {
        borderColor: 'red',
      },
    */
      '&:hover fieldset': {
        
        
      },
      /* 
      '&.Mui-focused fieldset': {
        borderColor: 'green',
      },
      */
    },});

const StyledRating = styled(Rating)({
  '& .MuiRating-iconFilled': {
    color: '#ff6d75',
  },
  '& .MuiRating-iconHover': {
    color: '#ff3d47',
  },
});

const CharCreator = () => {

    const [viewSelector, setviewSelector] = React.useState(1);
    const [infoText, setinfoText] = React.useState('');
    const [charName, setcharName] = React.useState('');
    const [charBiogr, setcharBiogr] = React.useState('');
    const [charRace, setcharRace] = React.useState('');
    const [charCulture, setcharCulture] = React.useState('');
    const [keySelected, setkeySelected] = React.useState('');
    const [selectedBondBonus, setselectedBondBonus] = React.useState('');
    const [actionAssign, setactionAssign] = React.useState(4);
    const [combatActionValue, setcombatAction] = React.useState(3);
    const [character, setCharacter] = React.useState({
        charName: "",
        charBiogr: "",
        charRace: "",
        charCulture: "",
        bondSelected: {},
        charLevel: 1,
        NarrativeChar: {
            BondName: "",
            Sneak: 0,
            Excel: 0,
            Survey: 0,
            Channel: 0,
            Charm: 0,
            Command: 0,
            Tinker: 0,
            Study: 0,
            Recall: 0,
            Traverse: 0,
            Smash: 0,
            Endure: 0,
            Snipe: 0,
            Skirmish: 0,
            Crush: 0,
            Stress: 0,
            Harm: 0,
            StressRelief: "",
            StressSpecial: "",
            Ideal1: "",
            Ideal2: "",
            Ideal3: "",
            BondPowers: ""
        },
    });

    const actions = ["Sneak", "Traverse", "Survey", "Study", "Charm", "Command", "Tinker", "Excel", "Smash", "Endure", "Channel", "Recall"];
    const combatAction = ["Skirmish", "Crush", "Snipe"];
    const narCombatValues = [2,1,0];
    const [actionsValues, setactionsValues] = React.useState({
        "Sneak": 0, "Traverse": 0, "Survey": 0, "Study": 0, "Charm": 0, "Command": 0, 
        "Tinker": 0, "Excel": 0, "Smash": 0, "Endure": 0, "Channel": 0, "Recall": 0,
        "Skirmish": 0, "Crush": 0, "Snipe": 0
    })



    const bondKeys = Object.keys(BondsJson.default);
    var selectedBond = {};
    var finalNarrative = {};
    let bond_component = [];
    var max = 0;

    for (let i = 0; i < bondKeys.length; i++) {
        let element = bondKeys[i][1];
        if (element > max) {
            max = element;
        }
        
    }

    console.log(character);

    const handleinfoText = (event) => {
        if (event.target.name) {
            setinfoText(event.target.name)
        }
        else {
            setinfoText(event.target.id)
        }
        
    }
    
    const handleselectedBondBonus = (event) => {
        setselectedBondBonus(event.target.value);
        setCharacter({
            ...character,
            ["NarrativeChar"]: {...character.NarrativeChar, [event.target.name]: 2},
        });
    }

    const handlecharName = (event) => {
        setcharName(event.target.value);
        setCharacter({
            ...character,
            [event.target.name]: event.target.value
        });
    };

    const handlecharBiogr = (event) => {
        setcharBiogr(event.target.value);
        setCharacter({
            ...character,
            [event.target.name]: event.target.value
        });
    }; 

    const handlecharRace = (event) => {
        setcharRace(event.target.value);
        setCharacter({
            ...character,
            [event.target.name]: event.target.value
        });
    }

    const handlecharCulture = (event) => {
        setcharCulture(event.target.value);
        setCharacter({
            ...character,
            [event.target.name]: event.target.value
        });
    }

    const handlekeySelected = (event) => {
        setkeySelected(event.target.value);
    }

    const handleActionPoint = (event, newValue) => {
        setCharacter({
            ...character,
            ["NarrativeChar"]: {...character.NarrativeChar, [event.target.name]: event.target.value}
        });
        setactionsValues({
            ...actionsValues,
            [event.target.name]: newValue
        });
        if (newValue == null){
            setactionAssign(count => count + actionsValues[event.target.name]);
        }
        else {
            setactionAssign(count => count + actionsValues[event.target.name] - newValue);
        };
    }

    const handleActionPointBond = (event, newValue) => {
        setCharacter({
            ...character,
            ["NarrativeChar"]: {...character.NarrativeChar, [event.target.name]: Number(event.target.value) + 2}
        });
        setactionsValues({
            ...actionsValues,
            [event.target.name]: newValue + 2
        });
        if (newValue == actionsValues[event.target.name] - 2){
            setactionAssign(count => count + 1);
        }
        else {
            setactionAssign(count => count - newValue);
        };
    }

    const handleActionCombat = (event, newValue) => {
        setCharacter({
            ...character,
            ["NarrativeChar"]: {...character.NarrativeChar, [event.target.name]: event.target.value}
        });
        setactionsValues({
            ...actionsValues,
            [event.target.name]: newValue
        });
        if (newValue == null){
            setcombatAction(count => count + actionsValues[event.target.name]);
        }
        else {
            setcombatAction(count => count + actionsValues[event.target.name] - newValue);
        };
    }

    Object.assign(selectedBond, BondsJson.default[keySelected]);
    console.log(selectedBond);

    const handleBondFinalName = () => {
        setCharacter({
            ...character,
            ["NarrativeChar"]: {...character.NarrativeChar, ["BondName"]: selectedBond.bondName} 
        })
    }

    const handleBondFinalSR = () => {
        setCharacter({
            ...character,
            ["NarrativeChar"]: {...character.NarrativeChar, ["StressRelief"]: selectedBond.StressRelief}
        })
    }
    
    const handleBondFinalSS = () => {
        setCharacter({
            ...character,
            ["NarrativeChar"]: {...character.NarrativeChar, ["StressSpecial"]: selectedBond.StressSpecial}
        })
    }

    const handleBondFinalHarm = () => {
        setCharacter({
            ...character,
            ["NarrativeChar"]: {...character.NarrativeChar, ["Harm"]: selectedBond.Harm}
        })
    }

    const handleBondFinalStress = () => {
        setCharacter({
            ...character,
            ["NarrativeChar"]: {...character.NarrativeChar, ["Stress"]: selectedBond.maxStress}
        })
    }

    const handleBondFinalIdeal1 = () => {
        setCharacter({
            ...character,
            ["NarrativeChar"]: {...character.NarrativeChar, ["Ideal1"]: selectedBond.ideals["I1"]}
        })
    }

    const handleBondFinalIdeal2 = () => {
        setCharacter({
            ...character,
            ["NarrativeChar"]: {...character.NarrativeChar, ["Ideal2"]: selectedBond.ideals["I2"]}
        })
    }

    const handleBondFinalIdeal3 = () => {
        setCharacter({
            ...character,
            ["NarrativeChar"]: {...character.NarrativeChar, ["Ideal3"]: selectedBond.ideals["I3"]}
        })
    }

    const handleFinalNarrative = () => {
        Object.assign(character.bondSelected, selectedBond);
        let stringChar = JSON.stringify(character);
        console.log(stringChar);
        console.log(finalNarrative);

        console.log(character);
    }

    const exportData = () => {
        handleFinalNarrative();
        const jsonString = `data:text/json;chatset=utf-8,${encodeURIComponent(
          JSON.stringify(character)
        )}`;
        const link = document.createElement("a");
        link.href = jsonString;
        link.download = "ctype_"+character.charName+".json";
        link.click();
      };

    for (let index = 0; index < max; index++) {
        let actualBond = bondKeys[index];
        var handlerBond = BondsJson.default[actualBond];
        bond_component.push(
            <Grid container spacing={0} id="SpaceBRows" justifyContent="center" alignItems="center">
                <Grid item lg={11}>
                    <Box
                        width="100%"
                        sx={{
                            display: 'flex',
                            flexWrap: 'wrap',
                            '& > :not(style)': {
                            m: 1,
                            width: "100%",
                            background: "#ed8e7f",
                            height: 300,
                            },
                        }}
                        >
                        <Paper elevation={3}>
                        <Box sx={{ my: 1, mx: 2, color: "#fff" }}>
                            <Grid container alignItems="center">
                                <Grid item lg={9}>
                                        <Typography gutterBottom variant="h4" component="div">
                                            {handlerBond.bondName}
                                        </Typography>
                                </Grid>
                                <Grid item lg={3}>
                                    <Chip label={"+2 "+handlerBond.bondBonus1} sx={{
                                            bgcolor: "#ff3865",
                                            color: "#fff",
                                            mx: 1
                                        }}/>
                                    |
                                    <Chip label={"+2 "+handlerBond.bondBonus2} sx={{
                                            bgcolor: "#ff3865",
                                            color: "#fff",
                                            mx: 1
                                        }}/>
                                    
                                </Grid>
                            </Grid>
                            <Typography color="text.secondary" variant="body2">
                            {handlerBond.bondDes}
                            </Typography>
                        </Box>
                        <Divider variant="middle" sx={{
                            bgcolor: "rgba(0, 0, 0, 0.5)"
                        }}/>
                        <Box sx={{ mx: 2, my: 1, color: "#fff" }}>
                            <Grid container spacing={1}>
                                <Grid item lg={2}>
                                    <Grid container spacing={1}>
                                        <Grid item lg={12}>
                                            <Chip label={"Max. Stress: "+handlerBond.maxStress} sx={{
                                                bgcolor: "#ff3865",
                                                color: "#fff",
                                            }}/>
                                        </Grid>
                                        <Grid item lg={12}>
                                            <Chip label={"Max. Harm: "+handlerBond.Harm} sx={{
                                                bgcolor: "#ff3865",
                                                color: "#fff",
                                            }}/>
                                        </Grid>
                                    </Grid>
                                </Grid>
                                <Grid item lg={4}>
                                    <Grid container spacing={1}>
                                            <Grid item>
                                                <Chip label="Stress Relief" sx={{
                                                    bgcolor: "#ff3865",
                                                    color: "#fff",
                                                }}/>
                                                <Typography gutterBottom variant="body2">{handlerBond.StressRelief}</Typography>
                                            </Grid>
                                            <Grid item>
                                                <Chip label="Stress Special" sx={{
                                                    bgcolor: "#ff3865",
                                                    color: "#fff",
                                                }}/>
                                                <Typography gutterBottom variant="body2">{handlerBond.StressSpecial}</Typography>
                                            </Grid>
                                            
                                    </Grid>
                                </Grid>

                                <Grid item lg={6}>
                                    <Grid container spacing={1}>
                                        <Grid item lg={12}>
                                            <Stack direction="row" spacing={1} alignItems="center">
                                                <Chip label="Ideal 1" sx={{
                                                    bgcolor: "#ff3865",
                                                    color: "#fff",
                                                }}/>
                                                <Typography gutterBottom variant="body2">
                                                    {handlerBond.ideals.I1}
                                                </Typography>   
                                            </Stack>                               
                                        </Grid>
                                        <Grid item lg={12}>
                                            <Stack direction="row" spacing={1} alignItems="center">
                                                <Chip label="Ideal 1" sx={{
                                                    bgcolor: "#ff3865",
                                                    color: "#fff",
                                                }}/>
                                                <Typography gutterBottom variant="body2">
                                                    {handlerBond.ideals.I2}
                                                </Typography>   
                                            </Stack>
                                        </Grid>
                                        <Grid item lg={12}>
                                            <Stack direction="row" spacing={1} alignItems="center">
                                                <Chip label="Ideal 1" sx={{
                                                    bgcolor: "#ff3865",
                                                    color: "#fff",
                                                }}/>
                                                <Typography gutterBottom variant="body2">
                                                    {handlerBond.ideals.I3}
                                                </Typography>   
                                            </Stack>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Box>
                        </Paper>
                    </Box>
                </Grid>
                <Grid item lg={1}>
                        {handlerBond.bondName == selectedBond.bondName ? (
                            <ButtonGroup
                                orientation="vertical"
                                aria-label="vertical contained button group"
                                variant="contained"
                            >
                                {selectedBond["bondBonus1"] == selectedBondBonus ? (
                                    <HalfBondButton 
                                        id='GroupButtons'
                                        name={selectedBond["bondBonus1"]}
                                        value={selectedBond["bondBonus1"]}
                                        onClick={handleselectedBondBonus}
                                        disabled
                                        >
                                    {selectedBond.bondBonus1}
                                    </HalfBondButton>
                                ) : (
                                    <HalfBondButton 
                                        id='GroupButtons'
                                        name={selectedBond["bondBonus1"]}
                                        value={selectedBond["bondBonus1"]}
                                        onClick={handleselectedBondBonus}
                                        >
                                    {selectedBond.bondBonus1}
                                    </HalfBondButton>
                                )}

                                {selectedBond["bondBonus2"] == selectedBondBonus ? (
                                    <HalfBondButton 
                                        id='GroupButtons'
                                        name={selectedBond["bondBonus2"]}
                                        value={selectedBond["bondBonus2"]}
                                        onClick={handleselectedBondBonus}
                                        disabled
                                        >
                                    {selectedBond.bondBonus2}
                                    </HalfBondButton>
                                ) : (
                                    <HalfBondButton 
                                        id='GroupButtons'
                                        name={selectedBond["bondBonus2"]}
                                        value={selectedBond["bondBonus2"]}
                                        onClick={handleselectedBondBonus}
                                        >
                                    {selectedBond.bondBonus2}
                                    </HalfBondButton>
                                )}
                            </ButtonGroup>
                        ) : (
                            <BondButton 
                                variant="contained"
                                value={bondKeys[index]}
                                onClick={handlekeySelected}
                                >
                            Seleccionar
                            </BondButton>
                        )}
                </Grid>
            </Grid>
        );
    }
    return(
        <Container maxWidth='lg'>
                {/* Row  */}
                <Grid item xs={12} lg={12} id="SpaceBRows">
                    <Breadcrumbs aria-label="breadcrumb">
                        <Link
                        underline="hover"
                        sx={{ display: 'flex', alignItems: 'center' }}
                        color="inherit"
                        href="/personajes"
                        >
                        <PeopleIcon sx={{ mr: 0.5 }} fontSize="inherit" />
                        Personajes
                        </Link>
                        {viewSelector === 1 ? (
                            <Typography
                                sx={{ display: 'flex', alignItems: 'center' }}
                                color="text.primary"
                                >
                                <BadgeIcon sx={{ mr: 0.5 }} fontSize="inherit" />
                                Información Basica
                            </Typography>
                        ) : (
                            <Link
                                underline="hover"
                                sx={{ 
                                    display: 'flex', 
                                    alignItems: 'center' , 
                                    fontFamily: "Arial", 
                                    fontSize: "1rem", 
                                    letterSpacing: "0.15008px"}}
                                color="inherit"
                                component="button"
                                onClick={() => setviewSelector(1)}
                                >
                                <BadgeIcon sx={{ mr: 0.5 }} fontSize="inherit" />
                                Información Basica
                            </Link>
                        )}
                        {viewSelector === 2 ? (
                            <Typography
                                sx={{ display: 'flex', alignItems: 'center' }}
                                color="text.primary"
                                >
                                <RecordVoiceOverIcon sx={{ mr: 0.5 }} fontSize="inherit" />
                                Narrativo
                            </Typography>
                        ) : (
                            <Link
                                underline="hover"
                                sx={{ 
                                    display: 'flex', 
                                    alignItems: 'center' , 
                                    fontFamily: "Arial", 
                                    fontSize: "1rem", 
                                    letterSpacing: "0.15008px"}}
                                color="inherit"
                                component="button"
                                onClick={() => setviewSelector(2)}
                                >
                                <RecordVoiceOverIcon sx={{ mr: 0.5 }} fontSize="inherit" />
                                Narrativo
                            </Link>
                        )}
                    </Breadcrumbs>
                </Grid>

            {viewSelector === 1 && (
          
            <Grid container spacing={1} id="SpaceBRows" justifyContent="flex-start" alignItems="flex-start">
                {/* Big Row 4/12  */}
                <Grid item xs={12} lg={4}>
                    <Grid container rowSpacing={3}>
                        <Grid item lg={8}>
                            <Box
                                width="100%"
                                sx={{
                                    backgroundColor: '#e59067',
                                    width: "169px",
                                    height: "169px",
                                    border: '1px solid #b34d3d',
                                    borderRadius: 2,
                                }} 
                            >
                            <img src='https://pbs.twimg.com/media/FPg9OJLakAAbFV7?format=jpg&name=4096x4096' width="169px" height="169px"></img>
                            </Box>
                        </Grid>
                        <Grid item lg={10}>
                            <FormControl fullWidth required>
                            <InformationTooltip onOpen={handleinfoText}>
                            <TextField
                                id="filled-multiline-flexible"
                                label="Biografía"
                                fullWidth
                                multiline
                                rows={5}
                                name="charBiogr"
                                value={charBiogr}
                                onChange={handlecharBiogr}
                                variant="filled"
                            />
                            </InformationTooltip>
                            </FormControl>
                        </Grid>
                    </Grid>
                </Grid>

                {/* Big Row 4/12  */}
                <Grid item xs={12} lg={4}>
                    <Grid container rowSpacing={4}>
                        <Grid item lg={12}>
                            
                                <Box component="form" autoComplete="off">
                                    <FormControl fullWidth required>
                                    <InformationTooltip onOpen={handleinfoText}>
                                    <ValtierTextField
                                        required
                                        id="outlined-required"
                                        label="Nombre de Personaje"
                                        value={charName}
                                        name="charName"
                                        onChange={handlecharName}
                                        style = {{width: 340}}
                                    />
                                    </InformationTooltip>
                                    <FormHelperText>Colocale un nombre o apodo a tu heroe</FormHelperText>
                                    </FormControl>
                                </Box>
                            
                        </Grid>
                        <Grid item lg={12}>
                            <Box component="form" autoComplete="off">
                                
                                <FormControl fullWidth required>
                                <InformationTooltip onOpen={handleinfoText}>
                                <TextField
                                    required
                                    id="outlined-required"
                                    label="Raza/Kin"
                                    
                                    value={charRace}
                                    name="charRace"
                                    onChange={handlecharRace}
                                    style = {{width: 340}}
                                />
                                </InformationTooltip>
                                <FormHelperText>Ingrese la Raza/Kin de su personaje</FormHelperText>
                                </FormControl>
                                
                            </Box>
                        </Grid>
                        <Grid item lg={12}>
                            
                            <FormControl fullWidth required>
                                <InputLabel id="demo-simple-select-label">Cultura</InputLabel>
                                <InformationTooltip onOpen={handleinfoText}>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="charCulture"
                                    value={charCulture}
                                    label="Cultura"
                                    name="charCulture"
                                    onChange={handlecharCulture}
                                    style = {{width: 340}}
                                >
                                <MenuItem value={"Yeokin"}>Yeokin</MenuItem>
                                <MenuItem value={"Islander"}>Islander</MenuItem>
                                <MenuItem value={"Leggio"}>Leggio</MenuItem>
                                <MenuItem value={"Churner"}>Churner</MenuItem>
                                <MenuItem value={"Chronicler"}>Chronicler</MenuItem>
                                <MenuItem value={"Guilder"}>Guilder</MenuItem>
                                <MenuItem value={"Other..."}>Other...</MenuItem>
                                </Select>
                                </InformationTooltip>
                                <FormHelperText>Escoga la cultura que posee su personaje</FormHelperText>
                            </FormControl>
                        
                        </Grid>
                    </Grid>
                </Grid>

                {/* Big Row 4/12  */}
                <Grid item lg={4}>
                    <Grid container rowSpacing={4}>
                        <Grid item lg={12}>
                            <Box
                                width="100%"
                                sx={{
                                    backgroundColor: '#d45b47',
                                    width: "100%",
                                    height: "280px",
                                    border: '1px solid #b34d3d',
                                    borderRadius: 2,
                                }}    
                            >
                                <div>{infoText}</div>
                            </Box>
                        </Grid>
                        <Grid item lg={12}>
                                <ConverterButton 
                                    variant="contained"
                                    value={2}
                                    onClick={() => setviewSelector(2)}
                                    >
                                Siguiente
                                </ConverterButton>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>

            )}

            {viewSelector === 2 && (
                <Grid container spacing={1} id="SpaceBRows" justifyContent="flex-start" alignItems="flex-start">
                    {bond_component}
                </Grid>
            )}
            {viewSelector === 2 && (
                <Grid container spacing={1} id="SpaceBRows" justifyContent="center" alignItems="center">
                    <Grid item lg={4} justifyContent="center" alignItems="center">
                        <Typography variant="h4">Acciones Narrativas</Typography>
                    </Grid>
                    <Grid item lg ={8}  justifyContent="center" alignItems="center">
                        <Chip label={"Puntos de Acción Restantes: "+actionAssign} sx={{ bgcolor: "#ff3865", color: "#fff", mx: 1 }}/>
                    </Grid>
                </Grid>
            )}
            {viewSelector === 2 && (
                <Grid container spacing={1} id="SpaceBRows" justifyContent="flex-start" alignItems="flex-start">
                    {actions.map(
                        (action) => action == selectedBondBonus ? (
                            <Grid item xs={6} lg={4}>
                                <Typography component="legend">{action}</Typography>
                                <Stack direction="row" spacing={0}>
                                    <StyledRating
                                        name={action}
                                        defaultValue={2}
                                        precision={1}
                                        disabled
                                        max={2}
                                        icon={<GpsFixedIcon fontSize="inherit" />}
                                        emptyIcon={<LocationSearchingIcon fontSize="inherit" />}
                                    />
                                    <StyledRating
                                        name={action}
                                        defaultValue={0}
                                        value={actionsValues[action]}
                                        precision={1}
                                        max={1}
                                        onChange={handleActionPointBond}
                                        icon={<GpsFixedIcon fontSize="inherit" />}
                                        emptyIcon={<LocationSearchingIcon fontSize="inherit" />}
                                    />
                                </Stack>
                            </Grid>
                        ) : (
                            <Grid item xs={6} lg={4}>
                                <Typography component="legend">{action}</Typography>
                                <StyledRating
                                    name={action}
                                    defaultValue={0}
                                    value={actionsValues[action]}
                                    precision={1}
                                    max={3}
                                    onChange={handleActionPoint}
                                    icon={<GpsFixedIcon fontSize="inherit" />}
                                    emptyIcon={<LocationSearchingIcon fontSize="inherit" />}
                                />
                            </Grid>
                        )
                    )}
                </Grid>
            )}
            {viewSelector === 2 && (
                <Grid container spacing={1} id="SpaceBRows" justifyContent="center" alignItems="center">
                    <Grid item lg={4} justifyContent="center" alignItems="center">
                        <Typography variant="h4">Acciones de Combate Narrativo</Typography>
                    </Grid>
                    <Grid item lg ={8}  justifyContent="center" alignItems="center">
                        <Chip label={"Asignar 2, 1 y 0 puntos a las acciones"} sx={{ bgcolor: "#ff3865", color: "#fff", mx: 1 }}/>
                    </Grid>
                </Grid>
            )}
            {viewSelector === 2 && (
                <Grid container spacing={1} id="SpaceBRows" justifyContent="flex-start" alignItems="flex-start">
                    {combatAction.map(
                        (action) => (
                            <Grid item xs={6} lg={4}>
                                <Typography component="legend">{action}</Typography>
                                <StyledRating
                                    name={action}
                                    defaultValue={0}
                                    value={actionsValues[action]}
                                    precision={1}
                                    max={2}
                                    onChange={handleActionCombat}
                                    icon={<GpsFixedIcon fontSize="inherit" />}
                                    emptyIcon={<LocationSearchingIcon fontSize="inherit" />}
                                />
                            </Grid>
                    ))}
                </Grid>
            )}
            {viewSelector === 2 && (
                <Grid container spacing={1} id="SpaceBRows" justifyContent="flex-start" alignItems="flex-start">
                    <Grid item lg={4}>
                        <ClickedButton variant="contained" onClick={exportData}>Guardar Personaje Narrativo</ClickedButton>
                    </Grid>
                </Grid>
            )}
        </Container>
    );
}

export default CharCreator;