import React from 'react'
import {AppBar, Toolbar, Grid, InputBase, IconButton, Badge} from '@material-ui/core'
import ChatBubbleIcon from '@material-ui/icons/ChatBubble';
import NotificationsIcon from '@material-ui/icons/Notifications';
import PowerSettingsNewIcon from '@material-ui/icons/PowerSettingsNew';


const Header = () => {
    return (
        <AppBar position="static">
            <Toolbar>
                <Grid container>
                    <Grid item>
                        <InputBase/>
                    </Grid>
                    <Grid item sm></Grid>
                    <Grid item>
                        <IconButton>
                            <Badge badgeContent={4}
                                   color="secondary">
                                <ChatBubbleIcon/>
                            </Badge>
                            <Badge badgeContent={1}
                                   color='secondary'>
                                <NotificationsIcon/>
                            </Badge>
                            <PowerSettingsNewIcon/>
                        </IconButton>
                    </Grid>
                </Grid>
            </Toolbar>
        </AppBar>
    )
};

export default Header;