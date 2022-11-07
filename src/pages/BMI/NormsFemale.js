import React from "react";

const NormsFemale = ({bmi}) => {
    if (bmi < 16) {
        return <div><h2 style={{color: "red"}}>Twoje BMI: {bmi}</h2>
            <h2> Wygłodzenie !</h2>
            <p>Jesteś skrajnie niedożywiona. Twoje życie i zdrowie jest zagrożone. Powinnaś natychmiast udać się do
                szpitala.</p>
        </div>
    } else if (bmi >= 16 && bmi < 17) {
        return <div><h2 style={{color: "orange"}}>Twoje BMI: {bmi}</h2>
            <h2> Wychudzenie !</h2>
            <p>Jesteś niedożywiona. Powinnaś niezwłocznie skonsultować się z lekarzem lub innym specjalistą.</p>
        </div>
    } else if (bmi >= 17 && bmi < 18.5) {
        return <div><h2 style={{color: "yellow"}}>Twoje BMI: {bmi}</h2>
            <h2> Niedowaga</h2>
            <p>Masz niedowagę. Powinnaś zadbać o to, by Twoja dieta była bogatsza w wysokokaloryczne i gęste odżywczo
                posiłki. Najlepiej, gdybyś skonsultowała się ze specjalistą</p>
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
            <p>Masz nadwagę. Powinnaś obniżyć kaloryczność posiłków i wprowadzić więcej ruchu. Najlepiej, gdybyś
                skonsultowała się z lekarzem lub specjalistą</p>
        </div>
    } else if (bmi >= 30 && bmi < 35) {
        return <div><h2 style={{color: "orange"}}>Twoje BMI: {bmi}</h2>
            <h2> Otyłość I stopnia !</h2>
            <p>Jesteś otyła, a Twoje życie i zdrowie są zagrożone. Skonsultuj się z lekarzem lub specjalistą.</p>
        </div>
    } else if (bmi >= 35 && bmi < 40) {
        return <div><h2 style={{color: "red"}}>Twoje BMI: {bmi}</h2>
            <h2> Otyłość II stopnia !</h2>
            <p>Jesteś otyła, a Twoje życie i zdrowie są zagrożone. Niezwłocznie skonsultuj się z lekarzem lub
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

export default NormsFemale;