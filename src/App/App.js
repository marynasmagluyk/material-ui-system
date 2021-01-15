import React from 'react';
import './App.css';
import SideMenu from "../components/SideMenu";
import {makeStyles, CssBaseline} from '@material-ui/core';
import Header from "../components/Header";


const useStyles = makeStyles({
    appMain: {
        paddingLeft: '320px',
        width: '100%'
    }
});


function App() {

    const classes = useStyles();

    return (
        <div>
            <SideMenu/>
            <div className={classes.appMain}>
                <Header/>
            </div>
            <CssBaseline/>
        </div>
    );
}

export default App;
