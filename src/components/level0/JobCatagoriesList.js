import React, { useState, useEffect } from "react";
import JobManager from "../../modules/JobManager"
import {Title} from "../title/Title"
import "../styling/Style.css"
import {JobCatagoriesCard} from "./JobCatagoriesCard"
// import {PurpleDot} from "../../images/PrupleDot"

export const JobCatagoriesList = (props) => {
    // const [levelOne, setLevelOne] = useState([]);

    // useEffect(() => {
    //     JobManager.getLevel("Level1").then((categories) => {
    //         if(categories.Level1 !== "NA" && !levelOne.includes(categories.Level1)) {
    //             setLevelOne[levelOne.sort()];
    //         }
    //     })}, []);
  
    const [jobs, setJobs] = useState([]);

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
        if (jobCategory.Level1 !== "NA" && !LevelOneList.includes(jobCategory.Level1)) {
            LevelOneList.push(jobCategory.Level1)
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
            <div className="jobviz-parent"> 
                <div type="button"
                        className="purple-dot-background"
                        onClick={() => {
                        props.history.push("/");
                        // console.log("you clicked me");
                }}></div>  
                <div className="jobs-parent">
                    <div className="container-cards">
                        {AlphaList.map((category) => (
                        <JobCatagoriesCard
                            key={category}
                            category={category}
                            jobs={jobs}
                            {...props}
                        />
                        ))}
                    </div>
                </div>
            </div>        
       </> 
    );
};