import React from 'react';
import './App.css';

import {makeStyles, CssBaseline, createMuiTheme} from '@material-ui/core';
import { ThemeProvider } from '@material-ui/core/styles';

import SideMenu from "../components/SideMenu";
import Header from "../components/Header";

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
        }
    }
});

const useStyles = makeStyles({
    appMain: {
        paddingLeft: '320px',
        width: '100%'
    }
});


function App() {

    const classes = useStyles();

    return (
        <ThemeProvider theme={theme}>
            <div>
                <SideMenu/>
                <div className={classes.appMain}>
                    <Header/>
                </div>
                <CssBaseline/>
            </div>
        </ThemeProvider>
    );
}

export default App;
