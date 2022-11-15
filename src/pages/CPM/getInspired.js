import React, {useState, useEffect} from "react";

const GetInspired = ({insp}) => {
    const [data, setData] = useState([]);
        const api = "https://www.themealdb.com/api/json/v1/1/list.php?i=list"
        useEffect(() => {
        fetch(`${api}`)
            .then(res => res.json())
            .then(json => setData(json.meals))
            .catch(err => console.error(err))
        }, [insp]);

    const tenRandom = (data) => {
        const tenRandom = [];
        for(let i = 1; i <=10; i++) {
            let randomNumber = Math.floor(Math.random() * data.length + 1);
            tenRandom.push(data[randomNumber])
        }
        console.log(tenRandom)
        return tenRandom;
    }

if(insp === true) {
    return <div><h3>Urozmaicona dieta to podstawa zdrowia! Kiedy ostatnio w Twojej diecie znalazły się:</h3>
        <ul>{tenRandom(data).map(el => <li key={el.idIngredient}>{el.strIngredient}</li>)}</ul></div>
} else {
    return null;
}
}

export default GetInspired;