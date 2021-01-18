import React, {useState, useEffect} from 'react';
import {Grid, TextField, FormControl, RadioGroup, FormControlLabel, Radio, FormLabel} from '@material-ui/core';
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
                          xs={6}>
                        <FormControl>
                            <FormLabel>Gender</FormLabel>
                            <RadioGroup row
                                        name='gender'
                                        value={employees.fullName}
                                        onChange={handleInputChange}></RadioGroup>
                            <FormControlLabel value='female'
                                              control={<Radio/>}
                                              label='Female'></FormControlLabel>
                            <FormControlLabel value='male'
                                              control={<Radio/>}
                                              label='Male'></FormControlLabel>
                            <FormControlLabel value='other'
                                              control={<Radio/>}
                                              label='Other'></FormControlLabel>
                        </FormControl>
                    </Grid>
                </Grid>
            </Grid>
        </Form>
    )
};

export default EmployeeForm;