import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";



export const JobCatagoriesCardL3 = (props) => {
// const levelOne = props.LevelOne
// const levelTwo = props.LevelTwo
// const levelThree = props.LevelThree
// let category = props.category

//  const makeUrlPath = () => {
//     category = category.replace(/\s+/g, '-').toLowerCase();
    
// }
// makeUrlPath();
// console.log(category)

  return (
    <>
      <div className="jobviz-parent-level1">                           
        
          <div type="button"
                            className="purple-dot-background-level1"
                            onClick={() => {
                             
                            // console.log("you clicked me");
                    }}></div>
          <div className="listed-categories">
              {props.category}
          </div>


    </div>
    </>
  );
};


