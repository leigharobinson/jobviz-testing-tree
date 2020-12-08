import React, {useState} from "react"
import {Title} from "../title/Title"
import "../styling/Style.css"
import  {Search}  from "../search/Search"
import {Table} from "../table/Table"

export const Jobs = (props) => {
const [jobObj, setJobObj] = useState("")

return ( 
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
        

            <p className="option">Jobs</p>
        
    
    
    </div>
    <div className="jobviz-parent">
        <Table jobObj={jobObj} {...props} />
    </div>
    
</>

)
   
        }