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
    const [bmi, setBmi] = useState("");

    const bmiCalculate = (w,h) => {
        const height = h / 100;
        const weight = w / (height * height);
        const bmi = weight.toFixed(2);
        setBmi(bmi);
    }

    const submitHandler = (e) => {
        e.preventDefault();
        bmiCalculate(weight, height);
        setSub( () => true);
    }

    return <div className="container">
        <div className="form_block">
            <h1 className="header-form">Kalkulator BMI:</h1>
            <form className="form" onSubmit={submitHandler}>
            <div className="gender_row">
                <label>Kobieta
                    <input
                        className={["input", "input_radio"].join(" ")}
                        type="radio"
                        id="female"
                        value={isFemale.toString()}
                        onChange={() => setIsFemale(prev => prev ? false : "female")}
                    />
                </label>
                <label>Mężczyzna
                    <input
                        className={["input", "input_radio"].join(" ")}
                        type="radio"
                        id="male"
                        value={isMale.toString()}
                        onChange={() => setIsMale(prev => prev ? false : "male")}
                    />
                </label>
            </div>


            <label> Waga:
                <input
                    className="input"
                    type="number"
                    name="weight"
                    value={weight}
                    onChange={e => setWeight(e.target.value)}
                />
                kg
            </label>
            <label> Wzrost:
                <input
                    className="input"
                    type="number"
                    name="height"
                    value={height}
                    onChange={e => setHeight(e.target.value)
                }/>
                cm
            </label>
            <label> Wiek:
                <input
                    className="input"
                    type="number"
                    name="age"
                    onChange={e => setAge(e.target.value)}
                />
                lat
            </label>
            <button type="submit"  className="btn-submit">Oblicz</button>
        </form>
    </div>
        <div>
        <Result bmi={bmi} sub={sub} age={age} sex={isMale? isMale : isFemale} height={height} weight={weight}/>
    </div>
    </div>

};

export default BMI;