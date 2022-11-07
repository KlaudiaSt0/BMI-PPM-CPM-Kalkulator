import React from "react";

const NormsMale = ({bmi}) => {
    if (bmi < 16) {
        return <div><h2 style={{color: "red"}}>Twoje BMI: {bmi}</h2>
            <h2> Wygłodzenie !</h2>
            <p>Jesteś skrajnie niedożywiony. Twoje życie i zdrowie jest zagrożone. Powinieneś natychmiast udać się do
                szpitala.</p>
        </div>
    } else if (bmi >= 16 && bmi < 17) {
        return <div><h2 style={{color: "orange"}}>Twoje BMI: {bmi}</h2>
            <h2> Wychudzenie !</h2>
            <p>Jesteś niedożywiony. Powinieneś niezwłocznie skonsultować się z lekarzem lub specjalistą.</p>
        </div>
    } else if (bmi >= 17 && bmi < 18.5) {
        return <div><h2 style={{color: "yellow"}}>Twoje BMI: {bmi}</h2>
            <h2> Niedowaga</h2>
            <p>Masz niedowagę. Powinieneś zadbać o to, by Twoja dieta była bogatsza w wysokokaloryczne i gęste odżywczo
                posiłki. Najlepiej, gdybyś skonsultował się ze specjalistą</p>
        </div>
    } else if (bmi >= 18.5 && bmi < 25) {
        return <div><h2 style={{color: "green"}}>Twoje BMI: {bmi}</h2>
            <h2> Norma </h2>
            <p>Twoja waga jest prawidłowa! Zadbaj o to, by jedzenie gęste odżywczo stanowiło minimum 80% Twojej diety i
                ruszaj się co najmniej 3 razy w tygodniu.</p>
        </div>
    } else if (bmi >= 25 && bmi < 30) {
        return <div><h2 style={{color: "yellow"}}>Twoje BMI: {bmi}</h2>
            <h2> Nadwaga </h2>
            <p>Masz nadwagę. Powinieneś obniżyć kaloryczność posiłków i wprowadzić więcej ruchu. Najlepiej, gdybyś
                skonsultował się z lekarzem lub specjalistą</p>
        </div>
    } else if (bmi >= 30 && bmi < 35) {
        return <div><h2 style={{color: "orange"}}>Twoje BMI: {bmi}</h2>
            <h2> Otyłość I stopnia !</h2>
            <p>Jesteś otyły, a Twoje życie i zdrowie są zagrożone. Skonsultuj się z lekarzem lub specjalistą.</p>
        </div>
    } else if (bmi >= 35 && bmi < 40) {
        return <div><h2 style={{color: "red"}}>Twoje BMI: {bmi}</h2>
            <h2> Otyłość II stopnia !</h2>
            <p>Jesteś otyły, a Twoje życie i zdrowie są zagrożone. Niezwłocznie skonsultuj się z lekarzem lub
                specjalistą.</p>
        </div>
    } else if (bmi >= 40) {
        return <div><h2 style={{color: "red"}}>Twoje BMI: {bmi}</h2>
            <h2> Otyłość III stopnia !</h2>
            <p>Cierpisz na otyłość olbrzymią, a Twoje życie i zdrowie są zagrożone. Niezwłocznie skonsultuj się z lekarzem lub
                specjalistą.</p>
        </div>
    }
}

export default NormsMale;