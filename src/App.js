import React, { useState, useEffect } from 'react'
import './App.css';
import LandingPage from './components/LandingPage';
import Recipes from './components/Recipes';
import RecipeDetails from './components/RecipeDetails';
import Navbar from './components/Navbar'
import Reviews from './components/Reviews'
import AddReview from './components/AddReview';
import {Switch, Route} from 'react-router-dom'

function App() {
  const [recipes, setRecipes] = useState([])
  const [search, setSearch] = useState('')
  const [ issueRequest, setIssueRequest ] = useState(false)

  useEffect(() => {
    fetch('https://fokty-backend.herokuapp.com/recipes')
    .then(res => res.json())
    .then(setRecipes)
  }, [issueRequest])

  const searchList = recipes.filter((recipe) => {
   return recipe.title.toLowerCase().includes(search.toLowerCase())
  })

  function handleFavoriteButton(recipe){
        fetch(`https://fokty-backend.herokuapp.com/recipes/${recipe.id}`,{
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({liked: !recipe.liked})
        })
            .then( setIssueRequest(!issueRequest))
    }

  return (
    <div className="App">
      <Navbar />
      <Switch>
      <Route path='/recipes/:id'>
        <RecipeDetails recipes={searchList}/>
      </Route> 
      <Route exact path='/recipes'>
        <Recipes recipes={searchList} search={search} setSearch={setSearch} handleFavoriteButton={handleFavoriteButton}/>
      </Route>
      <Route path='/reviews/add'>
        <AddReview />
      </Route>
      <Route path='/reviews'>
        < Reviews /> 
        </Route>
      <Route exact path='/'>
          <LandingPage />
      </Route>
      <Route path="*">
        <h1>404 not found</h1>
      </Route>
      </Switch>
    </div>
  );
}

export default App;
