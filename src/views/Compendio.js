import * as React from 'react';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import PersonIcon from '@mui/icons-material/Person';
import Stack from '@mui/material/Stack';
import Rating from '@mui/material/Rating';
import StarIcon from '@mui/icons-material/Star';

const Compendio = () => {
    const value = 2;
    const initValue= 0;
    return(
            <Container maxWidth='lg' >
                <Grid container>
                    <Grid item>
                    <Stack direction="row" spacing={0}>
                        <Rating
                            name="text-feedback"
                            value={value}
                            readOnly
                            max={2}
                            emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
                        />
                        <Rating
                            name="text-feedback"
                            value={initValue}
                            precision={1}
                            emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
                        />
                    </Stack>
                    </Grid>

                </Grid>
            </Container>
    );
}

export default Compendio;