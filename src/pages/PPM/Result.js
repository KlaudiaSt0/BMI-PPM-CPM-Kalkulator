import React from 'react';

const Result = ({ppm, sub}) => {


    if (sub === false) {
        return null
    } else if (sub === true) {

      return <h1>Twoje PPM wynosi: {ppm} kcal</h1>
    }
}

export default Result;