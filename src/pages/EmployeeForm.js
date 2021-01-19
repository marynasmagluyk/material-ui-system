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

    const {employees, setEmployees, handleInputChange} = useForm(initialFormValues);


    return (
        <Form>
            <Grid container>
                <Grid item
                      xs={6}>
                    <Controls.Input
                        name='fullName'
                        label='Full Name'
                        value={employees.fullName}
                        onChange={handleInputChange}/>
                    <Controls.Input
                        name="email"
                        label='Email'
                        value={employees.email}
                        onChange={handleInputChange}/>
                    <Controls.Input
                        name="mobile"
                        label='Mobile'
                        value={employees.mobile}
                        onChange={handleInputChange}/>
                    <Controls.Input
                        name="city"
                        label='City'
                        value={employees.city}
                        onChange={handleInputChange}/>
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
                        options={employeeService.getDepartments()}/>
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
                        />
                    </div>
                </Grid>
            </Grid>
        </Form>
    )
};

export default EmployeeForm;