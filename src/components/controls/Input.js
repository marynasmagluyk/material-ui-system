import React from 'react';
import {TextField} from "@material-ui/core";

const Input = (props) => {

    const {name, label, error=null, value, onChange} = props;
    return (
        <TextField
        variant='outlined'
        label={label}
        name={name}
        value={value}
        onChange={onChange}
        {...(error && {error: true, helperText: error})}
      >
    </TextField>)
};

export default Input;