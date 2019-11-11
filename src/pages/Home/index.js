//*Functional component*
import React, { useState } from 'react';

import { Container, Typography, Card, Grid, TextField, Button } from '@material-ui/core';

export default () => {

    const [searchText, setSearchText] = useState('');

    const handleSearchTextChange = event => {
        setSearchText(event.target.value);
    };

    const handleCleanTextCLick = event => { console.log('this clean') };
    const handleSearchTextClick = event => { console.log('this search') };
    return (
        <Container>
            <Card>
                <Grid container>
                    <Grid>
                        <Typography>Bienvenido prro</Typography>
                    </Grid>
                    <Grid>
                        <label>Icono</label>
                    </Grid>
                </Grid>
                <TextField
                    value={searchText}
                    placeholder="Buscar ..."
                    onChange={handleSearchTextChange} />
                <Grid>
                    <Button variant="contained" onClick={handleCleanTextCLick}>Limpiar</Button>
                    <Button variant="contained" color="primary" onClick={handleSearchTextClick}>Buscar</Button>
                </Grid>
            </Card>
        </Container>)
}


