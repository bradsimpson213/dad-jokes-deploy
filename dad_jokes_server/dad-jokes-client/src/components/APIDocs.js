// React imports
import React from 'react';
// Styler imports
import {createUseStyles} from 'react-jss';


const useStyles = createUseStyles({
    root: {
        height: '60%',
        width: '75%',
        border: '2px solid black',
        borderRadius: '15px',
        backgroundColor: 'azure',
        fontFamily: 'AmaticSC',
        fontSize: '2rem',
        padding: '10px 45px 10px 45px'
    },
});

const APIDocs = () => {
    const classes = useStyles()

    return (
        <div className={ classes.root}>
            <h2>API DOCS HERE</h2>
            <p>Dad Jokes API is free to use, no API key needed.</p>
            <p>Use dad-jokes/getrandomjoke to return a random joke with the following format:</p>
        </div>
    )
};

export default APIDocs;