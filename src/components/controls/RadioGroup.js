import React from "react";
import {FormControl, FormControlLabel, FormLabel, Radio, RadioGroup} from "@material-ui/core";

const Radios = (props) => {

    const {name, label, onChange, value, items} = props;

    return (
        <FormControl>
            <FormLabel>{label}</FormLabel>
            <RadioGroup row
                        name={name}
                        value={value}
                        onChange={onChange}>
                {
                    items.map((item) => {
                        return <FormControlLabel key={item.id} value={item.id}
                                                control={<Radio/>}
                                                label={item.title}/>
                    })
                }
            </RadioGroup>
        </FormControl>
    )
};

export default Radios;