import React, {useState} from 'react';
import EmployeeForm from "./EmployeeForm";
import PageHeader from "../components/PageHeader";
import PeopleOutlineIcon from '@material-ui/icons/PeopleOutline';
import {Paper, makeStyles, TableBody, TableRow, TableCell} from '@material-ui/core';
import useTable from "../components/useTable";
import * as employeeService from '../services/employeeService';

const tableHeadCells = [
    {id: 'fullName', label: 'Employee Name'},
    {id: 'email', label: 'Email Address (Personal)'},
    {id: 'mobile', label: 'Mobile Number'},
    {id: 'department', label: 'Department'},
];

const Employees = () => {

    const classes = useStyles();
    const [records, setRecords] = useState(employeeService.getAllEmployees());
    const {TableContainer, TblHead, TblPagination } = useTable(records, tableHeadCells);


    return (
        <>
            <PageHeader
                title='New Employee'
                subtitle='Form design'
                icon={<PeopleOutlineIcon fontSize='large'/>}>
            </PageHeader>
            <Paper className={classes.PageContent}>
                {/*<EmployeeForm></EmployeeForm>*/}
                <TableContainer>
                    <TblHead/>
                    <TableBody>
                        {
                            records.map((record, index) => {
                                const {fullName, email, mobile, department} = record;
                                return (
                                    <TableRow key={index}>
                                        <TableCell>{fullName}</TableCell>
                                        <TableCell>{email}</TableCell>
                                        <TableCell>{mobile}</TableCell>
                                        <TableCell>{department}</TableCell>
                                    </TableRow>
                                )
                            })
                        }
                    </TableBody>
                </TableContainer>
                <TblPagination/>
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