import React from "react"
import Jobs from "../job/Jobs"

  export const Home = () => (
    <>
        <div className="jobviz-parent">
            <h2>Job Viz</h2>
        </div>
        <div className="jobviz-parent">
            <small>What do you want to be?</small>       
         </div>
         <div className="jobviz-parent">
            <Jobs />      
         </div>
        
    </>
)