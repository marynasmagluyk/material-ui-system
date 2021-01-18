import React, {useState, useEffect} from 'react';
import {Grid, TextField, FormControl, RadioGroup, FormControlLabel, Radio, FormLabel} from '@material-ui/core';
import {useForm, Form} from "../components/useForm";
import Input from "../components/controls/Input";


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


    return (
        <Form>
            <Grid container>
                <Grid item
                      xs={6}>
                    <Input
                    name='fullName'
                    label='Full Name'
                    value={employees.fullName}
                    onChange={handleInputChange}/>
                    <Input
                        variant='outlined'
                        label='Email'
                        value={employees.email}>
                    </Input>
                </Grid>
                    <Grid item
                          xs={6}>
                        <FormControl>
                            <FormLabel>Gender</FormLabel>
                            <RadioGroup row
                                        name='gender'
                                        value={employees.gender}
                                        onChange={handleInputChange}>
                            <FormControlLabel value='male'
                                              control={<Radio/>}
                                              label='Male'/>
                            <FormControlLabel value='female'
                                              control={<Radio/>}
                                              label='Female'/>
                            <FormControlLabel value='other'
                                              control={<Radio/>}
                                              label='Other'/>
                            </RadioGroup>
                        </FormControl>
                </Grid>
            </Grid>
        </Form>
    )
};

export default EmployeeForm;