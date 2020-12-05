import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {makeUrlPath} from "../Helper"



export const JobCatagoriesCard = (props) => {
  //String of Category
  let categoryStr = props.orderedCategory

//URL appropriate String of Category
  let category = makeUrlPath(categoryStr);


// const handleCLick = () => {
//   console.log (props.category + " was clicked")
// }

  return (
    <>
      <div className="jobviz-parent-level1">                           
        
          <div type="button"
                            className="purple-dot-background-level1"
                            onClick={() => {
                            
                            props.history.push(`/job-catagories/${category}`);
                            // console.log("you clicked me");
                    }}></div>
          <div id={categoryStr} className="listed-categories">
              {categoryStr}
          </div>


    </div>
    </>
  );
};


