
import React, { useState, useEffect } from 'react'
import { useParams, useHistory, Link } from 'react-router-dom';
import '../App.css'
function RecipeDetails() {
    const [recipe, setRecipe] = useState({})
    const [isRecipe, setIsRecipe] = useState(false)
    const [isIngredient, setIsIngredient] = useState(false)
    // const history = useHistory();
    const { id }  = useParams();
//    console.log(id)
    useEffect(() => {
        fetch(`https://fokty-backend.herokuapp.com/recipes/${id}`)
          .then((r) => r.json())
          .then((recipe) => {
            setRecipe(recipe);
            setIsRecipe(!isRecipe)
            setIsIngredient(!isIngredient)
            console.log(recipe)
            window.scrollTo(0, 0)
          });
      }, [id]);
    //   console.log(recipe)
      const {image, title, readyInMinutes, servings } = recipe
    // const stepList = analyzedInstructions.filter((step)=> {
    //     <span>{step.step}</span>
    // })
    // const instructions = analyzedInstructions[0]
    // console.log(instructions)
    // const instructionsList = instructions.map((step)=> )
return (
    <div>
        <div className="top-bar">
            <h1>From Our <br/> <span>Kitchen</span><br/> To Yours</h1>
            <h4>{title}</h4>
        </div>
        <div className='button'>
            <Link to='/recipes'><button>Back to Recipes</button></Link>
        </div>
        <div className="detail-container">
            <div className="image-container">
                <img className="detail-image" src={image}/>
            </div>
            <div className="details">
                <h4>Total Time to Make: {readyInMinutes} minutes</h4>
                <h3>Servings: {servings}</h3>
                <h5>Ingredients Needed: </h5>
                <ol className="ingredients">
                    {isIngredient ? recipe.extendedIngredients.map(data => (
                            <li key={data.id}>- {data.originalString}</li>
                    )) : null}
                </ol>
                <h5>Steps to Make: </h5>
                <ol className='steps'>
                    {isRecipe ? recipe.analyzedInstructions[0].steps.map(data => (
                            <li key={data.step}>- {data.step}</li>
                    )) : null}
                </ol>
            </div>
        </div>
    </div>
    )
}
export default RecipeDetails


{/* <div className="recipe-details-box">
        <div className = "recipe-image">
            <img src={recipe.image}/>
        <h1>HELLO</h1>
        <button className="likes">LIKE ME</button>
    </div>
        <div className="details">
            <h2>{recipe.title}</h2>
            <p>these are the details!!</p>
            {isRecipe ? recipe.analyzedInstructions[0].steps.map(data=> {
            return (
                <ol>
                 <li>{data.step}</li>
                </ol>
                )
            })
        : null
        }
        </div>
        <br />
        {/* <Link onClick={()=> history.push('/recipes')}>
            Go Back
        </Link> */}