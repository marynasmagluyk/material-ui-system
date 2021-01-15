import React from 'react'
import {AppBar, Toolbar, Grid, InputBase, IconButton, Badge} from '@material-ui/core'
import ChatBubbleIcon from '@material-ui/icons/ChatBubble';
import NotificationsIcon from '@material-ui/icons/Notifications';
import PowerSettingsNewIcon from '@material-ui/icons/PowerSettingsNew';
import SearchIcon from '@material-ui/icons/Search';
import {makeStyles} from '@material-ui/core';


const useStyles = makeStyles(theme => ({
    root: {
        backgroundColor: '#fff'
    },
    searchInput: {
        opacity: '0.6',
        padding: `0 ${theme.spacing(1)}px`,
        fontSize: '0.8rem',
        '&:hover': {
            backgroundColor: '#f2f2f2',
        },
        '& .MuiSvgIcon-root': {
            marginRight: theme.spacing(1),
        },
    }

}));

const Header = () => {

    const classes = useStyles();

    return (
        <AppBar position="static"
                className={classes.root}>
            <Toolbar>
                <Grid container alignItems='center'>
                    <Grid item>
                        <InputBase
                            className={classes.searchInput}
                            placeholder='Search topic'
                            startAdornment={<SearchIcon fontSize='small'/>}/>
                    </Grid>
                    <Grid item
                          sm/>
                    <Grid item>
                        <IconButton>
                            <Badge badgeContent={4}
                                   color="primary">
                                <ChatBubbleIcon fontSize='small'/>
                            </Badge>
                            <Badge badgeContent={1}
                                   color='secondary'>
                                <NotificationsIcon fontSize='small'/>
                            </Badge>
                            <PowerSettingsNewIcon fontSize='small'/>
                        </IconButton>
                    </Grid>
                </Grid>
            </Toolbar>
        </AppBar>
    )
};

export default Header;