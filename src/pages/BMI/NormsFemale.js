import React from "react";

const NormsFemale = ({bmi}) => {
    if (bmi < 16) {
        return <article className={["result", "result--3"].join(" ")}><h2 className="result-header">Twoje BMI: {bmi}</h2>
            <h2 className="result-header"> Wygłodzenie !</h2>
            <p className="result-text">Jesteś skrajnie niedożywiona. Twoje życie i zdrowie jest zagrożone. Powinnaś natychmiast udać się do
                szpitala.</p>
        </article>
    } else if (bmi >= 16 && bmi < 17) {
        return <article className={["result", "result--2"].join(" ")}><h2 className="result-header">Twoje BMI: {bmi}</h2>
            <h2  className="result-header"> Wychudzenie !</h2>
            <p className="result-text">Jesteś niedożywiona. Powinnaś niezwłocznie skonsultować się z lekarzem lub innym specjalistą.</p>
        </article>
    } else if (bmi >= 17 && bmi < 18.5) {
        return <article className={["result", "result--1"].join(" ")}><h2 className="result-header">Twoje BMI: {bmi}</h2>
            <h2  className="result-header"> Niedowaga</h2>
            <p className="result-text">Masz niedowagę. Powinnaś zadbać o to, by Twoja dieta była bogatsza w wysokokaloryczne i gęste odżywczo
                posiłki. Najlepiej, gdybyś skonsultowała się ze specjalistą</p>
        </article>
    } else if (bmi >= 18.5 && bmi < 25) {
        return <article className={["result", "result-0"].join(" ")}><h2 className="result-header">Twoje BMI: {bmi}</h2>
            <h2  className="result-header"> Norma </h2>
            <p className="result-text">Twoja waga jest prawidłowa! Zadbaj o to, by jedzenie gęste odżywczo stanowiło minimum 80% Twojej diety i
                ruszaj się co najmniej 3 razy w tygodniu, by zachować zdrowie.</p>
        </article>
    } else if (bmi >= 25 && bmi < 30) {
        return <article className={["result", "result-1"].join(" ")}><h2 className="result-header">Twoje BMI: {bmi}</h2>
            <h2  className="result-header"> Nadwaga </h2>
            <p className="result-text">Masz nadwagę. Powinnaś obniżyć kaloryczność posiłków i wprowadzić więcej ruchu. Najlepiej, gdybyś
                skonsultowała się z lekarzem lub specjalistą</p>
        </article>
    } else if (bmi >= 30 && bmi < 35) {
        return <article className={["result", "result-2"].join(" ")}><h2 className="result-header">Twoje BMI: {bmi}</h2>
            <h2 className="result-header"> Otyłość I stopnia !</h2>
            <p className="result-text">Jesteś otyła, a Twoje życie i zdrowie są zagrożone. Skonsultuj się z lekarzem lub specjalistą.</p>
        </article>
    } else if (bmi >= 35 && bmi < 40) {
        return <article className={["result", "result-3"].join(" ")}><h2 className="result-header">Twoje BMI: {bmi}</h2>
            <h2  className="result-header"> Otyłość II stopnia !</h2>
            <p className="result-text">Jesteś otyła, a Twoje życie i zdrowie są zagrożone. Niezwłocznie skonsultuj się z lekarzem lub
                specjalistą.</p>
        </article>
    } else if (bmi >= 40) {
        return <article className={["result", "result-4"].join(" ")}><h2 className="result-header">Twoje BMI: {bmi}</h2>
            <h2  className="result-header"> Otyłość III stopnia !</h2>
            <p className="result-text">Cierpisz na otyłość olbrzymią, a Twoje życie i zdrowie są zagrożone. Niezwłocznie skonsultuj się z lekarzem lub
                specjalistą.</p>
        </article>
    }
}

export default NormsFemale;