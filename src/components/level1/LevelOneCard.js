import React, { useState, useEffect } from "react";
import {makeUrlPath} from "../Helper"



export const LevelOneCard = (props) => {
let levelOneUrl = props.levelOneUrl
let categoryStr = props.orderedCategory
let category = makeUrlPath(categoryStr);

// console.log(category)



// const handleCLick = () => {
//   console.log (props.category + " was clicked")
// }


  return (
    <>
      <div className="jobviz-parent-level1">                           
        
          <div type="button"
                            className="purple-dot-background-level1"
                            onClick={() => {
            
                            props.history.push(`/job-catagories/${levelOneUrl}/${category}`);
                            // console.log("you clicked me");
                    }}></div>
          <div id={categoryStr} className="listed-categories">
              {categoryStr}
          </div>


    </div>
    </>
  );
};


