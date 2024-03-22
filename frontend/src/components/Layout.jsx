import React, { useState } from "react";
// import axios from 'axios';
import Inputs from "./Inputs";
import Recipes from "./Recipes";
import "./Layout.css";
import {BallTriangle} from "react-loader-spinner";
import Navbar from "./Navbar";
import Bg from "../assets/BG.png";



function Layout() {
  const [RecipeList, setRecipeList] = useState([]);
  const [isLoading,setIsloading]=useState(false);
  
  const setRecipes = (list) => {
    setLoader();
    setRecipeList(list);
  };

  const setLoader=()=>{
      setIsloading((prevState)=>!prevState);
  }
  return (
      <div
      className="mycontainer h-screen bg-cover font-mono pb-6"
      style={{ backgroundImage: `url(${Bg})` }}
    >
      <Navbar />
      <div className="head">
      </div>
      <div className="content pt-[8%]">
        <div>
          <Inputs getRecipes={setRecipes} setLoader={setLoader} />
        </div>
        <div className="Recipes flex justify-center items-center">
        <BallTriangle
        type="Circles"
        color="#2C2891"
        height="50px"
        width="50px"
        visible={(isLoading)? 'true' :'false'}
        className="loader"
        />
        {(RecipeList.length===0 && !isLoading) && <div><h5>Select Your filters and Get your Recipes here</h5></div>}
        <Recipes Recipes={RecipeList} />
        </div>
      </div>
    </div>
  );
}

export default Layout;