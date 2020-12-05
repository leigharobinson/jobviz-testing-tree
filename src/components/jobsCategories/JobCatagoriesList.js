import React, { useState, useEffect } from "react";
import JobManager from "../../modules/JobManager"
import {Title} from "../title/Title"
import "../styling/Style.css"
import {JobCatagoriesCard} from "./JobCatagoriesCard"
// import {PurpleDot} from "../../images/PrupleDot"

export const JobCatagoriesList = (props) => {
    const [jobs, setJobs] = useState([]);
    const [levelOne, setLevelOne] = useState([]);

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
    // console.log("LevelOneList", LevelOneList)



    
const handleClick = (e) => {
    e.preventDefault();
    // console.log(e.target.id);
    setLevelOne(e.target.id)
     }
    //  console.log(levelOne)

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
                        {AlphaList.map((orderedCategory) => {
                            return (
                                <div className="yellow" onClick={handleClick}>
                                    <JobCatagoriesCard
                                        
                                        id={orderedCategory.id}
                                        key={orderedCategory}
                                        orderedCategory={orderedCategory}
                                        jobs={jobs}
                                        {...props}
                                    />  
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>        
       </> 
    );
};