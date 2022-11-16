import React, {useEffect, useState} from 'react';

const Result = ({ppm, sub, weight, height, age, sex}) => {
    if (sub === false) {
        return null
    } else if (sub === true) {
        if ( weight && height && age && sex !== false) {
            return <h1 className={["result", "result-PPM"].join(" ")}>Twoje PPM wynosi: {ppm} kcal</h1>
        } else {
            return <h2 className={["error", "result"].join(" ")}>Popraw błędy w formularzu, by uzyskać poprawny wynik.</h2>

        }
    }
}

export default Result;