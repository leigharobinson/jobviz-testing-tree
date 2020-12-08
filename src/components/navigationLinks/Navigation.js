import React from "react";

import {makeUrlPath} from "../Helper"



export const LevelOneCard = (props) => {
  const jobs = props.jobs
  //String of Category
  let categoryStr = props.orderedCategory

//URL appropriate String of Category
  let category = makeUrlPath(categoryStr);
  // console.log(category)
// LR look back at this, there must be simpler way
let titleStr = "";
const findObj = () => {
  jobs.filter((job)=> {   
    if(job.Level1 === categoryStr) {
      
      let emtStr = job.title;
      titleStr = emtStr;
    }
    return titleStr; 
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
        <div className="jobviz-parent-card">                           
          <div className="btn-container">
          <div type="button"
                  className="link-btn"
                  onClick={() => {
                    props.history.push(`/job-catagories/${category}`);
                    // console.log(category)
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
            
              <div id={categoryStr} className="listed-categories">
                
                  
              </div>


        </div>
        </>
  );}
};


