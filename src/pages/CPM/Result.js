import React, {useState} from 'react';
import GetInspired from "./getInspired";

const Result = ({cpm, sub}) => {
    const [insp, setInsp] = useState(false);

    if (sub === false) {
        return null
    } else if (sub === true) {

        return <><h1>Twoje CPM wynosi: {cpm} kcal</h1>
            <button onClick={() => setInsp(prev => !prev)}>Zainspiruj się!</button>
            <GetInspired insp={insp}/> </>
    }
}

export default Result;