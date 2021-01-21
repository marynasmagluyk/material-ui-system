import React, {useState} from 'react';
import EmployeeForm from "./EmployeeForm";
import PageHeader from "../components/PageHeader";
import PeopleOutlineIcon from '@material-ui/icons/PeopleOutline';
import {Paper, makeStyles, TableBody, TableRow, TableCell, Toolbar, InputAdornment} from '@material-ui/core';
import useTable from "../components/useTable";
import * as employeeService from '../services/employeeService';
import Controls from '../components/controls/Controls';
import {Search} from '@material-ui/icons'
import AddIcon from '@material-ui/icons/Add'
import Popup from "../components/Popup";


const tableHeadCells = [
    {id: 'fullName', label: 'Employee Name'},
    {id: 'email', label: 'Email Address (Personal)'},
    {id: 'mobile', label: 'Mobile Number'},
    {id: 'department', label: 'Department', disableSorting: true},
];

const Employees = () => {

    const classes = useStyles();
    const [records, setRecords] = useState(employeeService.getAllEmployees());
    const [filterFn, setFilterFn] = useState({fn: items => items});
    const [openPopup, setOpenPopup] = useState(false);

    const {TableContainer, TblHead, TblPagination, recordsAfterPagingAndSorting} = useTable(records, tableHeadCells, filterFn);

    const handleSearch = (e) => {
        let target = e.target;
        setFilterFn({
            fn: items => {
                if(target.value === '')
                    return items;
                else
                    return items.filter( item => item.fullName.toLowerCase().includes(target.value))
            }
        })
    };

    return (
        <>
            <PageHeader
                title='New Employee'
                subtitle='Form design'
                icon={<PeopleOutlineIcon fontSize='large'/>}>
            </PageHeader>
            <Paper className={classes.PageContent}>
                <Toolbar>
                    <Controls.Input
                        className={classes.searchInput}
                        label='Search Employees'
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position='start'>
                                    <Search/>
                                </InputAdornment>
                            )
                        }}
                        onChange={handleSearch}
                    />
                    <Controls.Button
                    text='Add New'
                    variant='outlined'
                    startIcon={<AddIcon/>}
                    className={classes.newButton}
                    onClick={() =>  setOpenPopup(true)}/>
                </Toolbar>
                <TableContainer>
                    <TblHead/>
                    <TableBody>
                        {
                            recordsAfterPagingAndSorting().map((record, index) => {
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
            <Popup openPopup={openPopup}
            setOpenPopup={setOpenPopup}
            title='Employee Form'>
                <EmployeeForm/>
            </Popup>
        </>
    )
};

const useStyles = makeStyles(theme => ({
    PageContent: {
        margin: theme.spacing(5),
        padding: theme.spacing(3)
    },
    searchInput: {
        width: '75%'
    },
    newButton: {
        position: 'absolute',
        right: '10px',
    }
}));

export default Employees;