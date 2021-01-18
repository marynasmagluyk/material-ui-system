import React from 'react';
import EmployeeForm from "./EmployeeForm";
import PageHeader from "../components/PageHeader";
import PeopleOutlineIcon from '@material-ui/icons/PeopleOutline';
import {Paper, makeStyles} from '@material-ui/core';



const Employees = () => {

    const classes = useStyles();
    return (
        <>
            <PageHeader
                title='New Employee'
                subtitle='Form design'
                icon={<PeopleOutlineIcon fontSize='large'/>}>
            </PageHeader>
            <Paper className={classes.PageContent}>
                <EmployeeForm></EmployeeForm>
            </Paper>
        </>
    )
};

const useStyles = makeStyles(theme => ({
    PageContent: {
        margin: theme.spacing(5),
        padding: theme.spacing(3)
    }
}));

export default Employees;