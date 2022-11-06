import React from 'react';

const Result = ({bmi}) => {
    let newBmi = parseInt(bmi);
    if (newBmi > 18.5 && newBmi < 25) {
        return <h2 style={{color: "green"}}>Twoje BMI: {bmi}</h2>
    }
    else {
        return <h2 style={{color: "red"}}>Twoje BMI: {bmi}</h2>
    }

// if (submit === false) {
//    return null
// } else if(weight < 1 || height < 1 || age < 1 || isFemale.checked === isMale.checked) {
//     return <h2 className="error"> Uzupełnij prawidłowo formularz <span> !</span></h2>
// }  else if(weight >= 1 && height >= 1 && age >= 18 && isFemale.checked !== isMale.checked){
//     return <h2>Twoje BMI: {bmi}</h2>
//
// }

}


export default Result;

