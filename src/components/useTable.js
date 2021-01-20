import React, {useState} from 'react'
import {Table, TableHead, TableRow, TableCell, makeStyles, TablePagination, TableSortLabel} from '@material-ui/core';

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
    const [order, setOrder] = useState();
    const [orderBy, setOrderBy] = useState();


    const TableContainer = (props) => (
        <Table className={classes.table}>
            {props.children}
        </Table>
    );

    const TblHead = props => {

        const handleSortRequest = (cellId) => {
            const isAscending = orderBy === cellId && order === 'asc';
            setOrder(isAscending ? 'desc' : 'asc');
            setOrderBy(cellId);
        };

        return (
            <TableHead>
                <TableRow>
                    {
                        headCells.map((headCell) => {
                            const {id, label} = headCell;
                            return (
                                <TableCell key={id}>
                                    <TableSortLabel
                                        active={orderBy === id}
                                        direction={orderBy === headCell.id ? order : 'asc'}
                                        onClick={() => {
                                            handleSortRequest(id)
                                        }}>
                                        {label}
                                    </TableSortLabel>
                                </TableCell>
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
        setRowsPerPage(parseInt(event.target.value, 10));
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

    const stableSort = (array, comparator) => {
        const stabilizeThis = array.map((el, index) => [el, index]);
        stabilizeThis.sort((a, b) => {
            const order = comparator(a[0], b[0]);
            if (order !== 0) return order;
            return a[1] - b[1];
        });
        return stabilizeThis.map((el) => el[0])
    };

    const getComparator = (order, orderBy) => {
        return order === 'desc'
            ? (a, b) => descendingComparator(a, b, orderBy)
            : (a, b) => -descendingComparator(a, b, orderBy)
    };
    const descendingComparator = (a, b, orderBy) => {
        if (b[orderBy] < a[orderBy]) {
            return -1;
        }
        if (b[orderBy] < a[orderBy]) {
            return 1;
        }
        return 0;
    };

    const recordsAfterPagingAndSorting = () => {
        return stableSort(records, getComparator(order, orderBy)).slice(page * rowsPerPage, (page + 1) * rowsPerPage)
    };

    return {
        TableContainer,
        TblHead,
        TblPagination,
        recordsAfterPagingAndSorting,
    };
};

export default useTable;