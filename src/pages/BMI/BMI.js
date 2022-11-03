import React from 'react';
import {useState} from "react";
import FormValidation from "./formValidation";

const BMI = () => {
    const [weight, setWeight] = useState("");
    const [height, setHeight] = useState("");
    const [age, setAge] = useState("");
    const [isFemale, setIsFemale] = useState(false);
    const [isMale, setIsMale] = useState(false);


    return <div className="container">
        <h1>Kalkulator BMI:</h1>
        <form className="form" onSubmit={(e) => FormValidation (e, weight, height, age, isFemale, isMale)}>
            <div className="gender_row">
                <label>Kobieta
                <input type="checkbox"  id="female" onChange={() => setIsFemale(prev => !prev)}/>
                </label>
                <label>Mężczyzna
                <input type="checkbox" id="male" onChange={() => setIsMale(prev => !prev)}/>
                </label>
            </div>
            <label> Waga:
                <input type="text" name="weight" onChange={e => setWeight(e.target.value)}/> kg
            </label>
            <label> Wzrost:
                <input type="text" name="height" onChange={e => setHeight(e.target.value)}/> cm
            </label>
            <label> Wiek:
                <input type="text" name="age" onChange={e => setAge(e.target.value)}/> lat
            </label>
            <button type="submit">Oblicz</button>
        </form></div>

};

export default BMI;