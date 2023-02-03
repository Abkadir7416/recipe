import React, {useEffect, useState} from "react";
import './App.css';
import Recipe from "./Recipe";



const App = () => {

  const APP_ID = '374df0e6';
  const APP_KEY = 'e0e52f3f7b476ea654d6fc11ed558d41';
  // const api_example = ``;


const [recipes, setRecipes] = useState([]);
const [search, setSearch] = useState("");
const [query, setQuery] = useState('banana');

  useEffect( () => {
    getRecipe();
    // console.log("bye");
  }, [query])

  const getRecipe = async() => {
    // console.log("hell0");
    const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`);
    const data = await response.json();
    console.log(data.hits)
    // console.log(data.hits);
    setRecipes(data.hits);
  }

  const updateSearch = e =>{
    setSearch(e.target.value);
  }

  const getSearch = e =>{
    e.preventDefault();
    // console.log(search);
    setQuery(search);
  }

  return (
    <div className="App">
      <form className = "search-form" onSubmit={getSearch}>
        <input className = "search-bar" type = "text" value={search} onChange={updateSearch}></input>
        <button   className = "search-button" type = "submit">
          Search
        </button>
       
      </form>
      <div className="recipes">

      {
        recipes.map(recipe => (
          <Recipe
          key = {recipe.recipe.label}
          
          tittle = {recipe.recipe.label}
           calories = {recipe.recipe.calories} 
           images = {recipe.recipe.image}
           ingredients = {recipe.recipe.ingredients}
          />
        ))
      }
      </div>
    </div>
  );
}

export default App;
