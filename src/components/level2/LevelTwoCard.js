import React, { useState, useEffect } from "react";
import {makeUrlPath} from "../Helper"



export const LevelTwoCard = (props) => {
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
console.log(categoryStr);

if(titleStr !== categoryStr) {
  return (
    <>
      <div className="jobviz-parent-level1">                           
        
          <div type="button"
                            className="purple-dot-background-level1"
                            onClick={() => {
              
                              props.history.push(`/job-catagories/${levelOneUrl}/${levelTwoUrl}/${category}`);
                              
                        
                    }}></div>
          <div className="listed-categories">
              {categoryStr}
          </div>


    </div>
    </>
  );
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


