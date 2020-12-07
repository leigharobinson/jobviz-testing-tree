import React, { useState, useEffect } from "react";
import {makeUrlPath} from "../Helper"



export const LevelThreeCard = (props) => {
  let levelOneUrl = props.levelOneUrl;
  let levelTwoUrl = props.levelTwoUrl;
  let categoryStr = props.orderedCategory;
  let category = makeUrlPath(categoryStr);
  let jobs = props.jobs

  // LR look back at this, there must be simpler way
let titleStr = "";
const findObj = () => {
  jobs.filter((job)=> {   
    if(job.Level3 === categoryStr) {
      
      let emtStr = job.title;
      
      titleStr = emtStr;
    }
  })
}
findObj();
// console.log("THis is category", category); 

if(titleStr !== categoryStr) {
  return (
    <>
      <div className="jobviz-parent-card">                           
      <div className="btn-container">
          <div type="button"
                            className="link-btn"
                            onClick={() => {
              
                              props.history.push(`/job-catagories/${levelOneUrl}/${levelTwoUrl}/${category}`);
                              
                        
                    }}>+</div>
          </div>
          <div className="listed-categories">
              {categoryStr}
          </div>


    </div>
    </>
  );
} else { 
    return (
        <>
          <div className="jobviz-parent-card">
            <div className="btn-container">                        
              <div type="button" className="end-btn"></div>
            </div>
            <div id={categoryStr} className="listed-categories">
                    {categoryStr}
            </div>
          </div>


  
        </>
  );}
  
};


