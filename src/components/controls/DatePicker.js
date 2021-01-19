import React from 'react';
import DateFnsUtils from '@date-io/date-fns';
import {MuiPickersUtilsProvider, KeyboardDatePicker} from '@material-ui/pickers';

const DatePicker = (props) => {

    const {name, label, onChange, value} = props;

    const convertToDefaultParameter = (name, value) => ({
        target: {
            name, value
        }
    });

    return (
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <KeyboardDatePicker disableToolbar variant='inline'
                                inputVariant='outlined'
                                label={label}
                                formate='MMM/dd/yyy'
                                name={name}
                                value={value}
                                onChange={date => onChange(convertToDefaultParameter(name, date))}
            />
        </MuiPickersUtilsProvider>
    )
};

export default DatePicker;
