import React from 'react';
import {Paper, Card, Typography, makeStyles} from '@material-ui/core';


const PageHeader = (props) => {

    const {title, subtitle, icon} = props;

    return (
        <Paper elevation={0}
               square>
            <div>
                <Card> {icon}</Card>
                <div>
                    <Typography
                        variant='h6'
                        component='div'
                    >
                        {title}
                    </Typography>
                    <Typography
                        variant='subtitle'
                        component='div'
                    >
                        {subtitle}
                    </Typography>
                </div>
            </div>
        </Paper>
    )
};

export default PageHeader;