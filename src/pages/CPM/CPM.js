import React from 'react';
import {useState} from "react";
import Result from "./Result";


const CPM = () => {
    const [weight, setWeight] = useState("");
    const [height, setHeight] = useState("");
    const [age, setAge] = useState("");
    const [isFemale, setIsFemale] = useState(false);
    const [isMale, setIsMale] = useState(false);
    const [activity, setActivity] = useState(1.2)
    const [sub, setSub] = useState(false);
    const [cpm, setCPM] = useState("");

    const cpmCalculate = (w,h,a,male) => {

        const height = 6.25 * h;
        const weight = 10 * w;
        const age = a * 5;
        const sex = male? 5 : -161;
        console.log(sex, male);
        const ppm = weight + height - age + sex;

        const cpm = ppm * activity;
        setCPM(cpm);
        console.log(cpm)
    }

    const submitHandler = (e) => {
        e.preventDefault();
        cpmCalculate(weight, height, age, isMale);
        setSub( () => true);
    }

    return <div className="container">
        <div className="form_wrapper">
            <h1 className="header-form">Kalkulator CPM :</h1>
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
                <label> Współczynnik aktywności:
                    <select
                        className="input"
                        value={activity}
                        name="activity"
                        onChange={e => setActivity(e.target.value)}>
                        <option key={1.2} value={1.2}>osoba leżąca</option>
                        <option key={1.25} value={1.25}>siedzący tryb życia</option>
                        <option key={1.5} value={1.5}>umiarkowana aktywność fizyczna</option>
                        <option key={1.75} value={1.75}>aktywny tryb życia</option>
                        <option key={2} value={2}>wyczynowe uprawianie sportu</option>
                    </select>
                </label>
                <button type="submit" className="btn-submit">Oblicz</button>
            </form>
        </div>
        <div>
            <Result cpm={cpm} sub={sub}/>
        </div>
    </div>

};

export default CPM;