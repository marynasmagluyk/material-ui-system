import React from 'react';
import EmployeeForm from "./EmployeeForm";
import PageHeader from "../components/PageHeader";
import PeopleOutlineIcon from '@material-ui/icons/PeopleOutline';


const Employees = () => {
    return (
        <>
        <PageHeader
            title='New Employee'
            subtitle='Form design'
            icon={<PeopleOutlineIcon fontSize='large'/>}>
        </PageHeader>
    <EmployeeForm>hi</EmployeeForm>
</>
)


};

export default Employees;