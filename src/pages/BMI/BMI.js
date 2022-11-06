import React from 'react';
import {useState} from "react";
import Result from "./Result";


const BMI = () => {
    const [weight, setWeight] = useState("");
    const [height, setHeight] = useState("");
    const [age, setAge] = useState("");
    const [isFemale, setIsFemale] = useState(false);
    const [isMale, setIsMale] = useState(false);
    const [sub, setSub] = useState(false);
    const [marker, setMarker] = useState(1);

    const bmiCalculate = (w,h,a,male) => {
        console.log(male, "male");
        const height = h / 100;
        const weight = w / (height * height);
        const bmi = parseFloat(weight.toFixed(2));
        setMarker(bmi);
    }

    const submitHandler = (e) => {
        e.preventDefault();
        bmiCalculate(weight, height, age, isMale ? isMale : isFemale);
        console.log(marker);
    }



    return <div className="container" style={{justifyContent: "space-evenly", alignItems: "center"}}>
        <div>
        <h1>Kalkulator BMI:</h1>
        <form className="form" onSubmit={submitHandler}>
            <div className="gender_row">
                <label>Kobieta
                <input
                    type="checkbox"
                    id="female"
                    value={isFemale.toString()}
                    onChange={() => setIsFemale(prev => prev ? false : "female")}
                />
                </label>
                <label>Mężczyzna
                <input
                    type="checkbox"
                    id="male"
                    value={isMale.toString()}
                    onChange={() => setIsMale(prev => prev ? false : "male")}
                />
                </label>
            </div>
            <label> Waga:

                <input
                    type="number"
                    name="weight"
                    value={weight}
                    onChange={e => setWeight(e.target.value)}
                />
                kg
            </label>
            <label> Wzrost:
                <input
                    type="bumber"
                    name="height"
                    value={height}
                    onChange={e => setHeight(e.target.value)
                }/>
                cm
            </label>
            <label> Wiek:
                <input
                    type="number"
                    name="age"
                    onChange={e => setAge(e.target.value)}
                />
                lat
            </label>
            <button type="submit" >Oblicz</button>
        </form>
    </div>
        <div>
        <Result bmi={marker}/>
    </div>
    </div>

};

export default BMI;