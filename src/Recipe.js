import React from "react";
import style from './recipe.module.css'
const Recipe = ({tittle, images, calories, ingredients}) => {
    ingredients.map(ingredient =>{
        // console.log(ingredient.text);
    })
    return(
        <div style={{backgroundImage:`url(${images})`, backgroundRepeat: 'no-repeat!important', backgroundSize: 'cover', backgroundPosition: 'center'}} className={style.recipe}>
            <h1>{tittle}</h1>
            <ol className="">
                {ingredients.map(ingredient =>
                        <li style={{textShadow:'0.5px 0.5px rgba(255,255,255,1)', color:'rgba(0,0,0,1)'}} id="ingredient">{ingredient.text}</li>
                )}
            </ol>
            <p>{calories}</p>
            <img className={style.image} src = {images} />
        </div>
    );
}
export default Recipe;