import React, { useState, useEffect } from "react";
import {makeUrlPath} from "../Helper"



export const LevelTwoCard = (props) => {
  let levelOneUrl = props.levelOneUrl;
  let levelTwoUrl = props.levelTwoUrl;
  let categoryStr = props.orderedCategory;
  let category = makeUrlPath(categoryStr);


  return (
    <>
      <div className="jobviz-parent-level1">                           
        
          <div type="button"
                            className="purple-dot-background-level1"
                            onClick={() => {
                            props.history.push(`/job-catagories/${levelOneUrl}/${levelTwoUrl}/${category}`);
                            // console.log("you clicked me");
                    }}></div>
          <div className="listed-categories">
              {categoryStr}
          </div>


    </div>
    </>
  );
};


