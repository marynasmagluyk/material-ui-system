import React, {useState, useEffect} from 'react';
import {Grid, TextField, makeStyles} from '@material-ui/core';

const initialFormValues = {
    id: 0,
    fullName: '',
    email: '',
    mobile: '',
    city: '',
    gender: 'male',
    departmentId: '',
    hireDate: new Date(),
    isPermanent: false,
};

const EmployeeForm = () => {

    const [employees, setEmployees] = useState(initialFormValues);
    const classes = useStyles();

    const handleInputChange = (e) => {
        const {name, value} = e.target;
        setEmployees({
            ...employees,
            [name]: value
        })
    };

    useEffect(() => {

    }, [employees]);

    return (
        <form className={classes.root}>
            <Grid container>
                <Grid item
                      xs={6}>
                    <TextField
                        variant='outlined'
                        label='Full Name'
                        name='fullName'
                        value={employees.fullName}
                        onChange={handleInputChange}>
                    </TextField>
                    <TextField
                        variant='outlined'
                        label='Email'
                        value={employees.email}>
                    </TextField>
                    <Grid item
                          xs={6}></Grid>
                </Grid>
            </Grid>
        </form>
    )
};

const useStyles = makeStyles(theme => ({
    root: {
        '& .MuiFormControl-root': {
            width: '80%',
            margin: theme.spacing(1)
        }
    }
}));

export default EmployeeForm;