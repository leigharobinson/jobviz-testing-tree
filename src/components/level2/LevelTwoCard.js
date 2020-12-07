import React, { useState, useEffect } from "react";
import {makeUrlPath} from "../Helper"



export const LevelTwoCard = (props) => {
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

const bkColorChange = () => {
  document.body.style.backgroundColor = "#282c34"
}
// console.log(categoryStr);
// console.log(titleStr);

// const handleCLick = () => {
//   console.log (props.category + " was clicked")
// }

if(titleStr !== categoryStr) {
  return (
        <>
        <div className="jobviz-parent-card">                           
          <div className="btn-container">
            <div type="button"
                  className="link-btn"
                  onClick={() => {
                    props.history.push(`/job-catagories/${levelOneUrl}/${category}`);
                  }}>+</div>
          </div>
            <div id={categoryStr} className="listed-categories">
                {categoryStr}
            </div>


      </div>
      </>

  )
} else { 
    return (
        <>
          <div className="jobviz-parent-card">
            <div className="btn-container">                        
              <div type="button" className="end-btn" onClick={() => {
                   
                    props.history.push(`/job-catagories/${levelOneUrl}/${category}/endpoint`);
                  }}>o</div>
            </div>
            <div id={categoryStr} className="listed-categories">
                    {categoryStr}
            </div>
          </div>
              


        
        </>
  );}
};


