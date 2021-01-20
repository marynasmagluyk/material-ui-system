import React from 'react'
import {Table, TableHead, TableRow, TableCell, makeStyles} from '@material-ui/core';

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

    const classes = useStyles()

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

    return {
        TableContainer,
        TblHead
    };
};

export default useTable;