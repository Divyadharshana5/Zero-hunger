import React from 'react'
import "./Recipes.css";
import { SRLWrapper } from "simple-react-lightbox";

function Recipes(props) {
    console.log(props.Recipes);

    const options = {
        // Please note that "caption" is singular
        caption: {
          captionAlignment: 'start',
          captionColor: '#FFFFFF',
          captionContainerPadding: '0',
          captionFontFamily: 'inherit',
          captionFontSize: 'inherit',
          captionFontStyle: 'inherit',
          captionFontWeight: 'inherit',
          captionTextTransform: 'inherit',
          showCaption: true
        }
      }
    return (
        <SRLWrapper options={options}>
        <div className="recipe_list">
          {props.Recipes.map((item,index)=>{
              console.log(item.recipe['label']);
              return(
                  <div key={index}>
                      <a href={item.recipe['image']} onClick={()=>{ window.open(item.recipe['url']);}}>
                      <img src={item.recipe['image']} className="recipe_img" width="200px" height="200px" 
                    //   onClick={()=>{
                    //     window.open(item.recipe['url']);
                    //   }}
                      />
                      </a>
                      <h4 className="recipe_label">{item.recipe['label']}</h4>
                  </div>
                  
              );
          })}
        </div>
        </SRLWrapper>
    )
}

export default Recipes