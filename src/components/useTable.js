import React from 'react'
import {Table, TableHead, TableRow, TableCell} from '@material-ui/core';

const useTable = (records, headCells) => {

    const TableContainer = (props) => (
        <Table>
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