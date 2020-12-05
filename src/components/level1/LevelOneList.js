import React, { useState, useEffect } from "react";
import JobManager from "../../modules/JobManager"
import {Title} from "../title/Title"
import "../styling/Style.css"
import {LevelOneCard} from "./LevelOneCard"
// import {PurpleDot} from "../../images/PrupleDot"

export const LevelOneList = (props) => {
    let levelOneUrl = props.category

    let levelOneString = props.category

    const makeStringPath = () => {
        levelOneString = levelOneString.replace(/-+/g, " ")
        levelOneString = levelOneString.charAt(0).toUpperCase() + levelOneString.slice(1)
       
    }
    makeStringPath();
    
    // console.log(levelOneString)

    const [jobs, setJobs] = useState([]);
    
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
        if (jobCategory.Level1 === levelOneString && jobCategory.Level2 !== "NA" && !LevelOneList.includes(jobCategory.Level2)) {
            LevelOneList.push(jobCategory.Level2)
        }
    

    })

   
    filterJobCatLevelONe()  
    const alphaList = LevelOneList.sort()
    // console.log("LevelOneList", LevelOneList)



    return (
        <>
            <div>
                <Title />
            </div>        
            <h1>{levelOneString}</h1>
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
                        {alphaList.map((orderedCategory) => (
                        <LevelOneCard
                            key={orderedCategory}
                            orderedCategory={orderedCategory}
                            jobs={jobs}
                            levelOneUrl={levelOneUrl}
                            {...props}
                        />
                        ))}
                    </div>
                </div>
            </div>        
       </> 
    );

    return (
        <>

        <div className="jobviz-parent"> 
            
            <h1>A Test to see if this component is hidden or shown</h1>
            <h3>{levelOneString}</h3>
        </div>
        
    </>


    )
   
}


