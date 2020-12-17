import React, { useState, useEffect } from "react";
import {Title} from "../title/Title"
import "../styling/Style.css"
import JobManager  from "../../modules/JobManager"
// import { Autocomplete } from "../search/OldSearch"
// import {AutoSearch} from "../search/AutoSearch"
import {LrAutoSearchV2} from "../search/LRautoSearchV2"
import {Table} from "../table/Table"

export const Jobs = (props) => {
const [jobs, setJobs] = useState([]);

const jobObj = "";
 //set job obj from GET call to state
 useEffect(() => {
    JobManager.getAll().then((jobs) => {
        setJobs(jobs)
    })
}, []);

// console.log(jobs, "JOBS")
   
        ///THis is just a test run for search bar choices
        ///is this where I should pull all titles?
    //Search Functionality ???????
    let jobTitleList =[]
    const getAllJobNames = () => jobs.forEach((job) => {
        if (!jobTitleList.includes(job.title)) {
            jobTitleList.push(job.title)
        }
        })

    getAllJobNames();
    // console.log(jobTitleList, "Job Title list")

return ( 
    <>
    <div>
        <Title />
    </div>
    <div>
        {/* <AutoSearch jobs={jobs} jobTitleList={jobTitleList} /> */}
        {/* <Autocomplete jobs={jobs} jobTitleList={jobTitleList} /> */}
        <LrAutoSearchV2 jobs={jobs} jobTitleList={jobTitleList} {...props} />
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