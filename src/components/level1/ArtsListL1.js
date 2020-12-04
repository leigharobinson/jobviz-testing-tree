import React, { useState, useEffect } from "react";
import JobManager from "../../modules/JobManager"
import {Title} from "../title/Title"
import "../styling/Style.css"
import {JobCatagoriesCardL1} from "./JobCatagoriesCardL1"
// import {PurpleDot} from "../../images/PrupleDot"

export const Arts = (props) => {
    const [jobs, setJobs] = useState([]);
    const LevelOne = "arts,-design,-etc"
   
    const GetJobCatagories = () => {
        return JobManager.getAll().then((jobs) => {
            setJobs(jobs)
        })
    }
    useEffect(() => {
        GetJobCatagories()
    }, []);

    let LevelOneList = []
    const filterJobCatLevelONe = () => jobs.map((jobCategory) => {
        if (jobCategory.Level1 === "Arts, design, etc" && jobCategory.Level2 !== "NA" && !LevelOneList.includes(jobCategory.Level2)) {
            LevelOneList.push(jobCategory.Level2)
        }
    

    })
    filterJobCatLevelONe()  
    const AlphaList = LevelOneList.sort()
    // console.log("LevelOneList", LevelOneList.length)
    return (
        <>
            <div>
                <Title />
            </div>        
            <h1>woot level 1 Art</h1>
            <div className="jobviz-parent"> 
            <div type="button"
                        className="purple-dot-background"
                        onClick={() => {
                        props.history.push("/");
                        // console.log("you clicked me");
                }}></div>  
                <div type="button"
                        className="purple-dot-background"
                        onClick={() => {
                        props.history.push("/job-catagories");
                        // console.log("you clicked me");
                }}></div>  
                <div className="jobs-parent">
                    <div className="container-cards">
                        {AlphaList.map((category) => (
                        <JobCatagoriesCardL1
                            key={category}
                            category={category}
                            jobs={jobs}
                            LevelOne={LevelOne}
                            {...props}
                        />
                        ))}
                    </div>
                </div>
            </div>        
       </> 
    );
};