import React from "react";
import {makeUrlPath} from "../Helper"



export const LevelFourCard = (props) => {
  let levelOneUrl = props.levelOneUrl;
  let levelTwoUrl = props.levelTwoUrl;
  let levelThreeUrl = props.levelThreeUrl;
  let categoryStr = props.orderedCategory;

  let category = makeUrlPath(categoryStr);
  // console.log(categoryStr, "level four");
  // let jobs = props.jobs
   // LR look back at this, there must be simpler way
 
  return (
    <>
       <div className="jobviz-parent-card">
            <div className="btn-container">                        
            <div type="button" className="end-btn" onClick={() => {
                   
                   props.history.push(`/job-catagories/${levelOneUrl}/${levelTwoUrl}/${levelThreeUrl}/${category}/endpoint`);
                 }}>🥨</div>
            </div>
            <div id={categoryStr} className="listed-categories">
                    {categoryStr}
            </div>
          </div>
    </>
  );
};


