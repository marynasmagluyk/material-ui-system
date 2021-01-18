import React, {useState} from 'react';
import {makeStyles} from "@material-ui/core";

export const useForm = (initialFormValues) => {
    const [employees, setEmployees] = useState(initialFormValues);

    const handleInputChange = (e) => {
        const {name, value} = e.target;
        setEmployees({
            ...employees,
            [name]: value
        })
    };
    return ({
        employees,
        setEmployees,
        handleInputChange
    })
};

export const Form = (props) => {
    const classes = useStyles();

    return (<form className={classes.root}>
        {props.children}
    </form>)
};


const useStyles = makeStyles(theme => ({
    root: {
        '& .MuiFormControl-root': {
            width: '80%',
            margin: theme.spacing(1)
        }
    }
}));