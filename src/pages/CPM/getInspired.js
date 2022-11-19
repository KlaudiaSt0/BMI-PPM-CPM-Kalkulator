import React, {useState, useEffect} from "react";

const GetInspired = ({insp}) => {
    const [data, setData] = useState([]);

    const api = "https://api.edamam.com/api/recipes/v2?type=any&app_id=ba52b8b0&app_key=deca89dac3bc432bc19f451f51517084&diet=balanced&health=Mediterranean&calories=0-380&imageSize=SMALL&random=true";
    useEffect(() => {
        fetch(api)
            .then(res => res.json())
            .then(res => setData(res.hits))
            .catch(err => console.error(err))
    }, [insp]);

    console.log(data)

    if(insp === true) {
       return <article className="article-CPM">
           <h3 className="header_3">Urozmaicona dieta to podstawa zdrowia!<br/> Kiedy ostatnio w Twojej diecie znalazły się:</h3>
            <div className="links-container">
                {data.map(el => <a href={el.recipe.url} target="blank" className="api-links" key={el.recipe.url}> <span className="api-span">{el.recipe.label}</span><img src={el.recipe.image} alt="a picture of this dish" className="picOnHover"/>&nbsp;- cuisine&nbsp;type: {el.recipe.cuisineType}, kcal: {(el.recipe.calories).toFixed(2)}&nbsp;kcal</a>)}
            </div>
       </article>
    } else {
        return null;
    }
}
export default GetInspired;