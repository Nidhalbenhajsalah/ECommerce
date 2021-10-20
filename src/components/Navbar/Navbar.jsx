import React from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MoreIcon from '@mui/icons-material/MoreVert';
import AddIcon from '@mui/icons-material/Add';
import Fab from '@mui/material/Fab';
import Styles from './navbarstyles';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles(Styles)


export const Navbar = (props) => {
    const classes = useStyles(props);
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar variant="dense" className={classes.toolbar}>
                    <Typography variant="h6" color="inherit" component="div" >
                        BONCOMPTE
                    </Typography>
                    <Fab aria-label="add" align='center' className={classes.add}>
                        <AddIcon />
                    </Fab>
                    <IconButton color="inherit">
                        <MoreIcon />
                    </IconButton>
                </Toolbar>
            </AppBar>
        </Box>
    );
}
