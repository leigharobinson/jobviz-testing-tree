import React, { useState, useEffect } from "react";
import {makeUrlPath} from "../Helper"



export const LevelOneCard = (props) => {
let jobs = props.jobs
let levelOneUrl = props.levelOneUrl;
let categoryStr = props.orderedCategory;
// console.log("THis is category string", categoryStr)
let category = makeUrlPath(categoryStr);

// LR look back at this, there must be simpler way
let titleStr = "";
const findObj = () => {
  jobs.filter((job)=> {   
    if(job.Level2 === categoryStr) {
      
      let emtStr = job.title;
      
      titleStr = emtStr;
    }
  })
}
findObj();
// console.log(categoryStr);
// console.log(titleStr);

// const handleCLick = () => {
//   console.log (props.category + " was clicked")
// }

if(titleStr !== categoryStr) {
  return (
        <>
        <div className="jobviz-parent-level1">                           
          
            <div type="button"
                              className="purple-dot-background-level1"
                              onClick={() => {
                              
                                props.history.push(`/job-catagories/${levelOneUrl}/${category}`);
                                }}></div>
          
            <div id={categoryStr} className="listed-categories">
                {categoryStr}
            </div>


      </div>
      </>

  )
} else { 
    return (
        <>
          <div className="jobviz-parent-level1">                          
            
              <div id={categoryStr} className="listed-categories">
                <ul>
                  <li>{categoryStr}</li>
                </ul>
                  
              </div>


        </div>
        </>
  );}
};


