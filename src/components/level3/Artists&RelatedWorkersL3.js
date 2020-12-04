import React, { useState, useEffect } from "react";
import JobManager from "../../modules/JobManager"
import {Title} from "../title/Title"
import "../styling/Style.css"
import {JobCatagoriesCardL3} from "./JobCategoriesCardL3"
// import {PurpleDot} from "../../images/PrupleDot"

export const ArtistsRelatedWorkers = (props) => {
    const [jobs, setJobs] = useState([]);
    const LevelOne = "arts,-design,-etc"
    const LevelTwo = "art-&-design-workers"
    const LevelThree= "artists-&-related-workers"
    // let re = new RegExp('Architecture')
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
        if (jobCategory.Level3 === "Artists & related workers" && jobCategory.Level4 !== "NA" && !LevelOneList.includes(jobCategory.Level4)) {
            LevelOneList.push(jobCategory.Level4)
        }
    

    })
    filterJobCatLevelONe()  
    const AlphaList = LevelOneList.sort()
    console.log("LevelOneList", LevelOneList.length)
    return (
        <>
            <div>
                <Title />
            </div>        
            <h1>woot level 3 Art</h1>
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
                <div type="button"
                        className="purple-dot-background"
                        onClick={() => {
                        props.history.push("/job-catagories/arts,-design,-etc/");
                        // console.log("you clicked me");
                }}></div>  
                <div type="button"
                        className="purple-dot-background"
                        onClick={() => {
                        props.history.push("/job-catagories/arts,-design,-etc/art-&-design-workers/");
                        // console.log("you clicked me");
                }}></div>  
                <div className="jobs-parent">
                    <div className="container-cards">
                        {AlphaList.map((category) => (
                        <JobCatagoriesCardL3
                            key={category}
                            category={category}
                            jobs={jobs}
                            LevelOne={LevelOne}
                            LevelTwo={LevelTwo}
                            LevelThree={LevelThree}
                            {...props}
                        />
                        ))}
                    </div>
                </div>
            </div>        
       </> 
    );
};