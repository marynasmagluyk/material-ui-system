import React from 'react';
import './App.css';
import SideMenu from "../components/SideMenu";
import {makeStyles} from '@material-ui/core';


const useStyles = makeStyles({
    appStyles: {
        paddingLeft: '320px',
        width: '100%'
    }
});


function App() {

    const classes = useStyles();

    return (
        <div>
            <SideMenu/>
            <div className={classes.appStyles}>here we go</div>
        </div>
    );
}

export default App;
