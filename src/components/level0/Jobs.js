import React from "react"
import {Title} from "../title/Title"
import "../styling/Style.css"
import  {Search}  from "../search/Search"

export const Jobs = (props) => (
    <>
        <div>
            <Title />
        </div>
        <div>
            <Search />
        </div>
        <div className="jobviz-parent"> 
            
                <div type="button"
                    className="link-btn"
                    onClick={() => {
                    props.history.push("/job-catagories");
                    // console.log("you clicked me");
            }}> + </div>
            
    
                <p>Jobs</p>
            
        
        
        </div>
        
    </>
)