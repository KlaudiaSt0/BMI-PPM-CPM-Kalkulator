import React from 'react';
import NormsFemale from "./NormsFemale";
import NormsMale from "./NormsMale";

const Result = ({bmi, sub, age, sex}) => {
console.log(sex)
    if (sub === false) {
    return null
 } else if (sub === true) {

    if (age < 3 ) {
    return <h2 className="error"> BMI jest predestynowane dla osób powyżej 3-go roku życia. Do określania prawidłowości wagi dzieci służą centyle.</h2>
    } else if (age >= 3 && sex === "male") {
    return <NormsMale bmi={bmi}/>
    } else if (age >= 3 && sex === "female") {
       return <NormsFemale bmi={bmi} />
    }
    }
}


export default Result;

