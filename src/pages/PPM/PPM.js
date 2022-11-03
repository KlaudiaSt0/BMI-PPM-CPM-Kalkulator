import React from 'react';


const PPM = () => {
    return <div className="container">
        <h1>Kalkulator podstawowej przemiany materii</h1>
        <form >
            <label>Kobieta</label>
            <input type="checkbox" />
            <label>Mężczyzna</label>
            <input type="checkbox" />

            <label> Waga:
                <input type="text" name="weight"/> kg
            </label>
            <label> Wzrost:
                <input type="text" name="height"/> cm
            </label>
        </form>
    </div>
};

export default PPM;