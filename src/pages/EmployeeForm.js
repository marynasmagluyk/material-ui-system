import React, {useState, useEffect} from 'react';
import {Grid, TextField} from '@material-ui/core';

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

    useEffect(() => {

    },[employees]);

    return (
        <form>
            <Grid container>
                <Grid item xs={6}>
                    <TextField
                    variant='outlined'
                    label='Full Name'
                    value={employees.fullName}>
                    </TextField>
                    <TextField
                        variant='outlined'
                        label='Email'
                        value={employees.email}>
                    </TextField>
                    <Grid item xs={6}></Grid>
                </Grid>
            </Grid>
        </form>
    )
};

export default EmployeeForm;