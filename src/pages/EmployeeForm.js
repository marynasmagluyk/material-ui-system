import React from 'react';
import {Grid} from '@material-ui/core';
import {useForm, Form} from "../components/useForm";
import Controls from '../components/controls/Controls';
import * as employeeService from '../services/employeeService';


const genderItems = [
    {id: 'male', title: 'Male'},
    {id: 'female', title: 'Female'},
    {id: 'other', title: 'Other'}
];

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

    const validate = (fieldValues = employees) => {
        let temp = {...error};
        if('fullName' in fieldValues)
        temp.fullName = fieldValues.fullName ? '' : 'this field is required';
        if('email' in fieldValues)
        temp.email = (/$^|.+@.+..+/).test(fieldValues.email) ? '' : 'email is not valid';
        if('mobile' in fieldValues)
        temp.mobile = fieldValues.mobile > 9 ? '' : 'minimum 10 numbers required';
        if('departmentId' in fieldValues)
        temp.departmentId = fieldValues.departmentId.length !== 0 ? '' : 'this field is required';

        setError({...temp});

        if(fieldValues === employees)
        return Object.values(temp).every(property => property === '');
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validate()) {
            window.alert('correct fields');
        }
    };

    const {employees, setEmployees, resetForm,handleInputChange, error, setError} = useForm(initialFormValues, true, validate);

    return (
        <Form onSubmit={handleSubmit}>
            <Grid container>
                <Grid item
                      xs={6}>
                    <Controls.Input
                        name='fullName'
                        label='Full Name'
                        value={employees.fullName}
                        onChange={handleInputChange}
                        error={error.fullName}/>
                    <Controls.Input
                        name="email"
                        label='Email'
                        value={employees.email}
                        onChange={handleInputChange}
                        error={error.email}
                    />
                    <Controls.Input
                        name="mobile"
                        label='Mobile'
                        value={employees.mobile}
                        onChange={handleInputChange}
                        error={error.mobile}/>
                    <Controls.Input
                        name="city"
                        label='City'
                        value={employees.city}
                        onChange={handleInputChange}
                        error={error.city}
                    />
                </Grid>
                <Grid item
                      xs={6}>
                    <Controls.Radios name='gender'
                                     label='Gender'
                                     value={employees.gender}
                                     onChange={handleInputChange}
                                     items={genderItems}/>

                    <Controls.Select
                        name='departmentId'
                        label='Department'
                        value={employees.departmentId}
                        onChange={handleInputChange}
                        options={employeeService.getDepartments()}
                        error={error.departmentId}/>
                    <Controls.DatePicker
                        name='hireDate'
                        label='Hire Date'
                        value={employees.hireDate}
                        onChange={handleInputChange}
                        options={employeeService.getDepartments()}
                    />
                    <Controls.Checkbox
                        name='isPermanent'
                        label='Permanent Employee'
                        value={employees.isPermanent}
                        onChange={handleInputChange}
                    />
                    <div>
                        <Controls.Button
                            type='submit'
                            text='submit'
                        />
                        <Controls.Button
                            color='default'
                            text='reset'
                            onClick={resetForm}
                        />
                    </div>
                </Grid>
            </Grid>
        </Form>
    )
};

export default EmployeeForm;