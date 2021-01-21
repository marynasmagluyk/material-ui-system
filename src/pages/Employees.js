import React, {useState} from 'react';
import EmployeeForm from "./EmployeeForm";
import PageHeader from "../components/PageHeader";
import Popup from "../components/Popup";
import useTable from "../components/useTable";
import Controls from '../components/controls/Controls';
import ConfirmDialog from "../components/ConfirmDialog"
import * as employeeService from '../services/employeeService';
import {Paper, makeStyles, TableBody, TableRow, TableCell, Toolbar, InputAdornment} from '@material-ui/core';
import PeopleOutlineIcon from '@material-ui/icons/PeopleOutline';
import AddIcon from '@material-ui/icons/Add'
import EditOutlinedIcon from '@material-ui/icons/EditOutlined'
import {Search} from '@material-ui/icons'
import CloseIcon from '@material-ui/icons/Close'
import Notification from "../components/Notification";

const tableHeadCells = [
    {id: 'fullName', label: 'Employee Name'},
    {id: 'email', label: 'Email Address (Personal)'},
    {id: 'mobile', label: 'Mobile Number'},
    {id: 'department', label: 'Department'},
    {id: 'actions', label: 'Actions', disableSorting: true},
];

const Employees = () => {

    const classes = useStyles();
    const [records, setRecords] = useState(employeeService.getAllEmployees());
    const [recordForEdit, setRecordForEdit] = useState(null);
    const [filterFn, setFilterFn] = useState({fn: items => items});
    const [openPopup, setOpenPopup] = useState(false);
    const [notify, setNotify] = useState({isOpen: false, message: '', type: ''});
    const [confirmDialog, setConfirmDialog] = useState({ isOpen: false, title: '', subTitle: '' });


    const {TableContainer, TblHead, TblPagination, recordsAfterPagingAndSorting} = useTable(records, tableHeadCells, filterFn);

    const handleSearch = (e) => {
        let target = e.target;
        setFilterFn({
            fn: items => {
                if (target.value === '')
                    return items;
                else
                    return items.filter(item => item.fullName.toLowerCase().includes(target.value))
            }
        })
    };

    const addOrEdit = (employees, resetForm) => {
        if (employees.id === 0)
            employeeService.insertEmployee(employees);
        else
            employeeService.updateEmployee(employees);
        resetForm();
        setRecordForEdit(null);
        setOpenPopup(false);
        setRecords(employeeService.getAllEmployees());
        setNotify({
            isOpen: true, message: 'Submitted Successfully', type: 'success'
        })
    };

    const openInPopup = (record) => {
        setRecordForEdit(record);
        setOpenPopup(true)
    };

    const onDelete = (id) => {
        setConfirmDialog({
            ...confirmDialog,
            isOpen: false
        });
        employeeService.deleteEmployee(id);
        setRecords(employeeService.getAllEmployees());
        setNotify({
            isOpen: true, message: 'Deleted Successfully', type: 'error'
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
                        onClick={() => {
                            setOpenPopup(true);
                            setRecordForEdit(null);
                        }}
                    />
                </Toolbar>
                <TableContainer>
                    <TblHead/>
                    <TableBody>
                        {
                            recordsAfterPagingAndSorting().map((record, index) => {
                                const {id, fullName, email, mobile, department} = record;
                                return (
                                    <TableRow key={index}>
                                        <TableCell>{fullName}</TableCell>
                                        <TableCell>{email}</TableCell>
                                        <TableCell>{mobile}</TableCell>
                                        <TableCell>{department}</TableCell>
                                        <TableCell>
                                            <Controls.ActionButton
                                                color='primary'
                                                onClick={() => {
                                                    openInPopup(record)
                                                }}>
                                                <EditOutlinedIcon fontSize='small'/>
                                            </Controls.ActionButton>
                                            <Controls.ActionButton
                                                color='secondary'
                                                onClick={() => {
                                                    setConfirmDialog({
                                                        isOpen: true,
                                                        title: 'Are you sure to delete this record?',
                                                        subTitle: "You can't undo this operation",
                                                        onConfirm: () => { onDelete(id) }
                                                    })}}>
                                                <CloseIcon fontSize='small'/>
                                            </Controls.ActionButton>
                                        </TableCell>
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
                <EmployeeForm
                    recordForEdit={recordForEdit}
                    addOrEdit={addOrEdit}/>
            </Popup>
            <Notification
                notify={notify}
                setNotify={setNotify}
            />
            <ConfirmDialog
                confirmDialog={confirmDialog}
                setConfirmDialog={setConfirmDialog}
            />
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