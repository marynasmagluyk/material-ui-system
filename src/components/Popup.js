import React from 'react';
import {Dialog, DialogContent, DialogTitle, makeStyles, Typography} from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    dialogWrapper: {
        padding: theme.spacing(2),
        position: 'absolute',
        top: theme.spacing(5)
    }
}));

const Popup = (props) => {

    const {title, children, openPopup, setOpenPopup} = props;
    const classes = useStyles();

    return (
        <Dialog open={openPopup} maxWidth='md' classes={{paper: classes.dialogWrapper}}>
            <DialogTitle>
                <div><Typography variant='h6' component='div'>
                    {title}
                </Typography></div>
            </DialogTitle>
            <DialogContent dividers>
                {children}
            </DialogContent>

        </Dialog>
    )
};

export default Popup;