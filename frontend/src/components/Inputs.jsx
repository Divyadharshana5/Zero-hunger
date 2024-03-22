import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Inputs.css";

function Inputs(props) {
  const [recipeInputs, setRecipeInputs] = useState({
    ingredient: "",
    diet: "",
    cuisine: "",
    mealType: "",
    dishType: "",
  });

  const updateRecipeInputs = (updatedInput, value) => {
    console.log(updatedInput);
    console.log(value);
    // console.log(url);
    return setRecipeInputs({
      ...recipeInputs,
      [updatedInput]: value,
    });
  };
  var YOUR_APP_ID = "db4088fd";
  var YOUR_APP_KEY = "daec79ecb61a476fc4836293bccc930c";

  const getRecipe = async (e) => {
    e.preventDefault();
    if(recipeInputs.ingredient===''||
    recipeInputs.mealType===''||
    recipeInputs.diet===''||
    recipeInputs.dishType===''||
    recipeInputs.cuisine===''
    )
    {
      alert("please fill your Inputs!!!");
      return;
    }
    props.setLoader();
    const url = `https://api.edamam.com/search?q=${recipeInputs.ingredient}&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}&diet=${recipeInputs.diet}&cuisine=${recipeInputs.cuisine}&dishType=${recipeInputs.dishType}&mealType=${recipeInputs.mealType}&health=alcohol-free`;
    console.log(url);
    await axios
      .get(url)
      .then((res) => {
        props.getRecipes(res.data.hits);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <form className=" items-center">
      <div>
      <input
        placeholder="Enter Ingredieant"
        type="text"
        className="inputs"
        id="ingredient"
        onChange={(e) => {
          updateRecipeInputs("ingredient", e.target.value);
        }}
      />
      </div>
      <div>
      <select
        className="inputs"
        onChange={(e) => {
          updateRecipeInputs("cuisine", e.target.value);
        }}
      >
        <option value="" disabled selected hidden>
          Select Cuisine
        </option>
        <option className="option">American</option>
        <option>Asian</option>
        <option>British</option>
        <option>Chinese</option>
        <option>French</option>
        <option>Indian</option>
        <option>Italian</option>
        <option>Japanese</option>
        <option>Kosher</option>
        <option>Mediterranean</option>
        <option>Mexican</option>
        <option>Middle Eastern</option>
        <option>Nordic</option>
        <option>South American</option>
        <option>South East Asian</option>
      </select>
      </div>
      <div>
      <select
        placeholder="Select MealType"
        className="inputs"
        onChange={(e) => {
          updateRecipeInputs("dishType", e.target.value);
        }}
      >
        <option value="" disabled selected hidden>
          Select DishType
        </option>
        <option>Drinks</option>
        <option>Desserts</option>
        <option>Main course</option>
        <option>Soup</option>
        <option>Starter</option>
      </select>
      </div>
      <div>
      <select
        placeholder="Select Diet"
        className="inputs"
        onChange={(e) => {
          updateRecipeInputs("diet", e.target.value);
        }}
      >
        <option value="" disabled selected hidden>
          Select Diet
        </option>
        <option>high-protein</option>
        <option>high-fiber</option>
        <option>low-fat</option>
        <option>low-carb</option>
        <option>low-sodium</option>
      </select>
      </div>
      <div>
      <select
        placeholder="Select Diet"
        className="inputs"
        onChange={(e) => {
          updateRecipeInputs("mealType", e.target.value);
        }}
      >
        <option value="" disabled selected hidden>
          Select Meal Type
        </option>
        <option className="option">Breakfast</option>
        <option>Lunch</option>
        <option>Dinner</option>
        <option>Snack</option>
        <option>Teatime</option>
      </select>
      </div>
      <div>
      <button className="py-3 px-3 bg-gradient-to-t from-pink-500 via-red-500 to-yellow-500 rounded-lg cursor-pointer font-semibold text-white hover:from-green-400 hover:to-green-200 hover:text-black" onClick={getRecipe}>
        Search
      </button>
      </div>
    </form>
  );
}

export default Inputs;