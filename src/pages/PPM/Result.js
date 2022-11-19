import React, {useEffect, useState} from 'react';
import OneRandom from "./OneRandom";

const Result = ({ppm, sub, weight, height, age, sex}) => {
    const [random, setRandom] = useState(false);
    if (sub === false) {
        return null
    } else if (sub === true) {
        if ( weight && height && age && sex !== false) {
            return <><h1 className={["result", "result-PPM"].join(" ")}>Twoje PPM wynosi: {ppm}&nbsp;kcal</h1>
            <button onClick={() => setRandom(prev => !prev)} className="btn-api-PPM">Losuj przepis!</button>
            <OneRandom random={random}/></>
        } else {
            return <h2 className={["error", "result"].join(" ")}>Popraw błędy w formularzu, by uzyskać poprawny wynik.</h2>

        }
    }
}

export default Result;