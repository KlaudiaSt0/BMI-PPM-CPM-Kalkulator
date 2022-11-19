import React, {useState} from 'react';
import GetInspired from "./getInspired";

const Result = ({cpm, sub, weight, height, age, sex}) => {
    const [insp, setInsp] = useState(false);

    if (sub === false) {
        return null
    } else if (sub === true) {
        if ( weight && height && age && sex !== false) {
            return <><h1 className={["result", "result-CPM"].join(" ")}>Twoje CPM wynosi: {cpm}&nbsp;kcal</h1>
                <button onClick={() => setInsp(prev => !prev)} className="btn-api-CPM">Zainspiruj się!</button>
                <GetInspired insp={insp}/> </>
        } else {
            return <h2 className={["error", "result"].join(" ")}>Popraw błędy w formularzu, by uzyskać poprawny wynik.</h2>
        }
    }
}

export default Result;