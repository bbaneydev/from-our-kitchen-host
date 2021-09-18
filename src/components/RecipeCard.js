import React, { useState } from 'react'
import {Link} from 'react-router-dom'
import RecipeDetails from './RecipeDetails'
import '../App.css'

function RecipeCard({id, title, vegan, vegetarian,liked, recipe, handleFavoriteButton}) {
    // const [isFavorited, setIsFavorited] = useState(false)
    // function handleFavorited(){
    //     setIsFavorited(!isFavorited)
    // }

    return (
        <div className="recipes">
            <button onClick={()=>handleFavoriteButton(recipe)} id="favorite-button">{liked ?  '⭐' :  '☆'}</button>
            <h4>{title}</h4>
            {vegan ? <p>Vegan: ✔️</p> : <p>Vegan: ❌</p>}
            {vegetarian ? <p>Vegetarian: ✔️</p> : <p>Vegetarian: ❌</p>}
            <Link to={`/recipes/${id}`}><button>Cook This</button></Link>
        </div>
    )
}

export default RecipeCard