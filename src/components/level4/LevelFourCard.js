import React, { useState, useEffect } from "react";
import {makeUrlPath} from "../Helper"



export const LevelFourCard = (props) => {
  let levelOneUrl = props.levelOneUrl;
  let levelTwoUrl = props.levelTwoUrl;
  let levelThreeUrl = props.levelThree;
  let categoryStr = props.orderedCategory;
  let category = makeUrlPath(categoryStr);
  // console.log(categoryStr, "level four");
  let jobs = props.jobs
   // LR look back at this, there must be simpler way
 
  return (
    <>
      <div className="jobviz-parent-level1">                           
        
          {/* <div type="button"
                            className="purple-dot-background-level1"
                            onClick={() => {
                            
                            console.log("you clicked me", category);
                    }}></div> */}
          <div className="listed-categories">
            <ul>
                <li>{categoryStr}</li>
            </ul>
              
          </div>


    </div>
    </>
  );
};


