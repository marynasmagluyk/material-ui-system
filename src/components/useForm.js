import React, {useState} from 'react';
import {makeStyles} from "@material-ui/core";

export const useForm = (initialFormValues) => {

    const [employees, setEmployees] = useState(initialFormValues);

    const [error, setError] = useState({});

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
        handleInputChange,
        error,
        setError,
    })
};

export const Form = (props) => {
    const classes = useStyles();
    const {children, ...other} = props;
    return (<form className={classes.root} {...other} autoComplete='off'>
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