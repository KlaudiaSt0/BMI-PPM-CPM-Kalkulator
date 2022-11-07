import React from 'react';

const Result = ({bmi, sub, age, sex}) => {


    if (sub === false) {
        return null
    } else if (sub === true) {

        if (age < 18 ) {
            return <h2 className="error"> BMI jest predestynowane dla osób dorosłych. Do określania prawidłowości wagi dzieci służą centyle.</h2>
        } else if (bmi > 18.5 && bmi < 25) {
            return <h2 style={{color: "green"}}>Twoje BMI: {bmi}</h2>
        }
        else {
            return <h2 style={{color: "red"}}>Twoje BMI: {bmi}</h2>
        }
    }
}


export default Result;