import React from 'react';

const Result = ({cpm, sub}) => {


    if (sub === false) {
        return null
    } else if (sub === true) {

        return <h1>Twoje CPM wynosi: {cpm} kcal</h1>
    }
}

export default Result;