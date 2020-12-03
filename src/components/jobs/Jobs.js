import React from "react"
import {Title} from "../title/Title"
import "../styling/Style.css"

export const Jobs = (props) => (
    <>
        <div>
            <Title />
        </div>
        <div className="jobviz-parent"> 
            <div className="jobs-parent">
                <div type="button"
                    className="purple-dot-background"
                    onClick={() => {
                    props.history.push("/job-catagories-l1");
                    // console.log("you clicked me");
            }}></div>
            
    
                <p>Jobs</p>
            </div>
        
        
        </div>
        
    </>
)