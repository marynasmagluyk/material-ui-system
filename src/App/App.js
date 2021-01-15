import React from 'react';
import './App.css';
import {makeStyles, CssBaseline, createMuiTheme} from '@material-ui/core';
import {ThemeProvider} from '@material-ui/core/styles';
import PeopleOutlineIcon from '@material-ui/icons/PeopleOutline';
import SideMenu from "../components/SideMenu";
import Header from "../components/Header";
import PageHeader from "../components/PageHeader";

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
                <main className={classes.appMain}>
                    <Header/>
                    <PageHeader title='Page Header' subtitle='Page Description' icon={<PeopleOutlineIcon/>}/>
                </main>
                <CssBaseline/>
            </div>
        </ThemeProvider>
    );
}

export default App;
