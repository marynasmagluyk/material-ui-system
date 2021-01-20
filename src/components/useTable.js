import React, {useState} from 'react'
import {Table, TableHead, TableRow, TableCell, makeStyles, TablePagination} from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    table: {
        marginTop: theme.spacing(3),
        '& thead th': {
            fontWeight: '600',
            color: theme.palette.primary.main,
            backgroundColor: theme.palette.primary.light,
        },
        '& tbody td': {
            fontWeight: '300',
        },
        '& tdoby tr:hover': {
            backgroundColor: '#fffbf2',
            cursor: 'pointer',
        },
    }
}));

const useTable = (records, headCells) => {

    const classes = useStyles();
    const pages = [5, 10, 20];
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(pages[page]);

    const TableContainer = (props) => (
        <Table className={classes.table}>
            {props.children}
        </Table>
    );

    const TblHead = props => {
        return (
            <TableHead>
                <TableRow>
                    {
                        headCells.map((headCell)=> {
                            const {id, label} = headCell;
                            return (
                                <TableCell key={id}>{label}</TableCell>
                            )
                        })
                    }
                </TableRow>
            </TableHead>
        )
    };

    const handleChangePage = (event, newPage) => {
        setPage(newPage)
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value,10));
        setPage(0);
    };

    const TblPagination = () => (
        <TablePagination
        component='div'
        page={page}
        rowsPerPageOptions={pages}
        rowsPerPage={rowsPerPage}
        count={records.length}
        onChangePage={handleChangePage}
        onChangeRowsPerPage={handleChangeRowsPerPage}/>
    );

    const recordsAfterPagingAndSorting = () => {
        return records.slice(page*rowsPerPage, (page+1)*rowsPerPage)
    };

    return {
        TableContainer,
        TblHead,
        TblPagination,
        recordsAfterPagingAndSorting,
    };
};

export default useTable;