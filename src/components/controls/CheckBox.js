import React from 'react';
import {FormControl, FormControlLabel, Checkbox as MuiCheckBox} from '@material-ui/core';

const Checkbox = (props) => {

    const {name, label, value, onChange} = props;
    const convertToDefaultParameter = (name, value) => ({
        target: {
            name, value
        }
    });

    return (
        <FormControl>
            <FormControlLabel
                control={<MuiCheckBox
                    name={name}
                    color='primary'
                    checked={value}
                    onChange={e => onChange(convertToDefaultParameter(name, e.target.checked))}/>}
                label={label}
            />
        </FormControl>
    );
};

export default Checkbox;
