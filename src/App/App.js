import React from 'react';
import {makeStyles, CssBaseline, createMuiTheme} from '@material-ui/core';
import {ThemeProvider} from '@material-ui/core/styles';
import SideMenu from "../components/SideMenu";
import Header from "../components/Header";
import Employees from "../pages/Employees";

const theme = createMuiTheme({
    palette: {
        primary: {
            main: '#333996',
            light: '#3c44b126',
        },
        secondary: {
            main: '#f83245',
            light: '#f8324526',
        },
        background: {
            default: '#f4f5fd'
        },
    },
    shape: {
        borderRadius: '12px'
    },
    overrides: {
        MuiAppBar: {
            root: {
                transform: 'translateZ(0)',
            },
        },
    },
    props: {
        MuiIconButton: {
            disableRipple: true,
        },
    },
});

const useStyles = makeStyles({
    appMain: {
        paddingLeft: '320px',
        width: '100%',
    }
});


function App() {

    const classes = useStyles();

    return (
        <ThemeProvider theme={theme}>
            <div>
                <SideMenu/>
                <main className={classes.appMain}>
                    <Header/>
                    <Employees/>
                </main>
                <CssBaseline/>
            </div>
        </ThemeProvider>
    );
}

export default App;
