import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";



export const JobCatagoriesCard = (props) => {
// let [fieldCategory, setFieldCategory] = useState("");

// useEffect(() => {
//     var category = props.category
//     category = category.replace(/\s+/g, '-').toLowerCase();
//     setFieldCategory(category)
// }, [""])


let category = props.category

 const makeUrlPath = () => {
    category = category.replace(/\s+/g, '-').toLowerCase();
    
}
makeUrlPath();
// console.log(category)

  return (
    <>
      <div className="jobviz-parent-level1">                           
        
          <div type="button"
                            className="purple-dot-background-level1"
                            onClick={() => {
                              makeUrlPath()
                            props.history.push(`/job-catagories/${category}`);
                            // console.log("you clicked me");
                    }}></div>
          <div className="listed-categories">
              {props.category}
          </div>


    </div>
    </>
  );
};


