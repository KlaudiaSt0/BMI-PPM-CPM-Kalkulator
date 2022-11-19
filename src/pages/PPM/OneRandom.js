import React, {useState, useEffect} from "react";

const OneRandom = ({random}) => {
    const [data, setData] = useState([]);
        const api = "https://www.themealdb.com/api/json/v1/1/random.php"
        useEffect(() => {
        fetch(`${api}`)
            .then(res => res.json())
            .then(json => setData(json.meals[0]))
            .catch(err => console.error(err))
        }, [random]);


if(random === true) {
    return <article className="article">

            <div className="api-container">
                <h2 className="api-header">{data.strMeal}</h2>
                <small className="api-text">Category: {data.strCategory}</small>
                <small className="api-text">Area: {data.strArea}</small>
                <a className="api-link" href={data.strSource} target="blank">Przejdź do strony przepisu</a>
            </div>
        <img className="image-small" src={data.strMealThumb} alt={data.strMeal}/>


        </article>
} else {
    return null;
}
}

export default OneRandom;