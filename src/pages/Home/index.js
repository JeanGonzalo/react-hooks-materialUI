//*Functional component*
import React, { useState } from 'react';

import { Container, Typography, Card, Grid, TextField, Button } from '@material-ui/core';
import styles from './style';

export default () => {

    const [searchText, setSearchText] = useState('');
    const classes = styles();
    const handleSearchTextChange = event => {
        setSearchText(event.target.value);
    };

    const handleCleanTextCLick = event => { console.log('this clean') };
    const handleSearchTextClick = event => { console.log('this search') };
    return (
        <Container className={classes.container}>
            <Card className={classes.cardContainer}>
                <Grid container className={classes.titleGridContainer}>
                    <Grid>
                        <Typography className={classes.title}>Bienvenido!</Typography>
                    </Grid>
                    <Grid>
                        <label>Icono</label>
                    </Grid>
                </Grid>
                <TextField
                    value={searchText}
                    placeholder="Buscar ..."
                    className={classes.textFieldSearch}
                    onChange={handleSearchTextChange} />
                <Grid className={classes.buttonsContainer}>
                    <Button variant="contained" onClick={handleCleanTextCLick}>Limpiar</Button>
                    <Button variant="contained" className={classes.searchButton} color="primary" onClick={handleSearchTextClick}>Buscar</Button>
                </Grid>
            </Card>
        </Container>)
}


