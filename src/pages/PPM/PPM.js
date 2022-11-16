import React from 'react';
import {useState} from "react";
import Result from "./Result";


const PPM = () => {
    const [weight, setWeight] = useState("");
    const [height, setHeight] = useState("");
    const [age, setAge] = useState("");
    const [isFemale, setIsFemale] = useState(false);
    const [isMale, setIsMale] = useState(false);
    const [sub, setSub] = useState(false);
    const [ppm, setPPM] = useState("");

    const ppmCalculate = (w,h,a,male) => {

        const height = 6.25 * h;
        const weight = 10 * w;
        const age = a * 5;
        const sex = male? 5 : -161;
        console.log(sex, male);
        const ppm = weight + height - age + sex;
        setPPM(ppm);
        console.log(ppm)
    }

    const submitHandler = (e) => {
        e.preventDefault();
        ppmCalculate(weight, height, age, isMale);
        setSub( () => true);
    }

    return <div className="container">
        <div className="form_wrapper">
            <h1 className="header-form">Kalkulator PPM (wzór Mifflina) :</h1>
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
                <button type="submit" className="btn-submit">Oblicz</button>
            </form>
        </div>
        <div>
            <Result ppm={ppm} sub={sub} weight={weight} height={height} age={age} sex={isMale? isMale : isFemale}/>
        </div>
    </div>

};

export default PPM;