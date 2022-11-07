import React from 'react';

const Result = ({ppm, sub}) => {


    if (sub === false) {
        return null
    } else if (sub === true) {

      return <h1>Twoje PPM: {ppm}</h1>
    }
}


export default Result;