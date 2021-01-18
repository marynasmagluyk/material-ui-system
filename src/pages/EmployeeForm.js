import React, {useState, useEffect} from 'react';
import {Grid, TextField, makeStyles} from '@material-ui/core';
import {useForm, Form} from "../components/useForm";


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

    const {employees, setEmployees, handleInputChange} = useForm(initialFormValues);


    // useEffect(() => {
    //
    // }, [employees]);

    return (
        <Form>
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
        </Form>
    )
};

export default EmployeeForm;