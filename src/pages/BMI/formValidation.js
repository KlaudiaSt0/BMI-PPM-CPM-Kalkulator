import React from 'react';

let isValid = undefined;

const FormValidation = (e, ...args) => {
e.preventDefault();
const [weight, height, age, isFemale, isMale] = args;
const nWeight = parseFloat(weight);
const nHeight = parseFloat(height);
const nAge = parseFloat(age);

console.log(typeof nWeight, nWeight, typeof nHeight, typeof nAge, nHeight, nAge)

if (typeof nWeight && typeof nHeight && typeof nAge === "number") {
    isValid = true;
    console.log(isValid)
} else {
    isValid = false;
    console.log(isValid)
}


}

export default FormValidation;