import React from "react"
import "./Jobs.css"
// import {PurpleDot} from "../../images/PrupleDot"

export const Jobs = () => (
    <>
        <div className="jobs-parent">
            
            <button
                type="button"
                className="purple-dot-background"
          onClick={() => {
            props.history.push("/jobs/job-catagories");
            console.log("you clicked me");
          }}
        >
          Add employee
        </button>
            <div>
                <ul>
                    <li>Jobs</li>
                </ul>
            </div>
           
        </div>
        
    </>
)