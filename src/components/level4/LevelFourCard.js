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
       <div className="jobviz-parent-card">
            <div className="btn-container">                        
              <div type="button" className="end-btn"></div>
            </div>
            <div id={categoryStr} className="listed-categories" >
                    {categoryStr}
            </div>
          </div>
    </>
  );
};


