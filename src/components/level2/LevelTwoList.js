import React, { useState, useEffect } from "react";
import JobManager from "../../modules/JobManager"
import {Title} from "../title/Title"
import "../styling/Style.css"
import {LevelTwoCard} from "./LevelTwoCard"
import {makeStringPath, removeDash} from "../Helper"
import { Link } from "react-router-dom";
import {Table} from "../table/Table"

export const LevelTwoList = (props) => {
    //All the objects in jobs array
    const [jobs, setJobs] = useState([]);
    //where we set the id of the category that was clicked to sate
    const [jobName, setJobName] = useState([]);
    const [jobObj, setJobObj] = useState({
        id: 0,
        title: "",
        Hierarchy: "",
        OccupationType: "",
        Employment2016: 0,
        Employment2026: 0,
        ChgEmploy2016to26Num: 0,
        ChgEmploy2016to26Perc: 0,
        PercentSelfEmployed2016: 0,
        OccupationalOpenings2016to2026AnnualAverage: 0,
        MedianAnnualWage2017: "",
        TypicalEducationNeededForEntr: "",
        WorkExperienceInARelatedOccupation: "",
        TypicalOnTheJobTrainingNeededToAttainCompetencyInTheOccupation: "",
        ttl: "",
        Level0: "",
        Level4: "",
        Level3: "",
        Level2: "",
        Level1: "",
        pathString: "",
        Def: "",
    
        })
   
    // the level 1 category url sting we need to pass to children
    let levelOneUrl = props.category;
    //the level 1 category 'normal' string we need to match to make sure 
    //we only select level 2 categories that have the same level 1 category
    let levelOneString = makeStringPath(props.category);

    useEffect(() => {
        JobManager.getAll().then((jobs) => {
            setJobs(jobs)
        })
    }, []);

    //empty arry to push names of target level (Leve2)
    let levelList = []
    // console.log(levelList, "Here it is ONe")

    const filsterlevelTwo = () => jobs.filter((jobCategory) => {
        let noDash = removeDash(jobCategory.Level1)
        // console.log(noDash)
        if (noDash === levelOneString && jobCategory.Level2 !== "NA" && !levelList.includes(jobCategory.Level2)) {
            levelList.push(jobCategory.Level2)
        }
    });

   //call filter
    filsterlevelTwo(); 
    //alphabitize sorted list to use when mapping array to DOM  
    const alphaList = levelList.sort()
    // console.log("LevelList", LevelOneList)


    //OBJECT 
    //This get's the id of whatever category was clicked
    //THis is the Functionality to get object for Table
    useEffect(() => {
        getClickedJobObject();
        }, )
            
    const getClickedJobObject = () => {
        const arrayHold = [];
        jobs.some(function (job) {
            arrayHold.push(job.title === jobName)  
            })

        // console.log(arrayHold);
        if (arrayHold.includes(true)) {
             // console.log("Array Hold had one true value")
            jobs.filter((jobObj) => {
                if(jobName === jobObj.title){
                    setJobObj(jobObj)
                }
            })
        } else{
            setJobObj("")
        };     
    };

   


    return (
        <>
            <div>
                <Title />
            </div>        
            
                
            <div className="jobviz-header">    
                
                    <h4>{levelOneString}</h4>                 
            </div> 
            <div className="crumbs">
                        <small><Link to={"/"}>Jobs</Link> > <Link to={"/job-catagories"}>Job Categories</Link> > {levelOneString}</small>
                    </div>
            <div className="jobviz-parent"> 
                <div className="btn-container">
                    <div type="button"
                            className="link-btn"
                            onClick={() => {
                            props.history.push("/");
                            // console.log("you clicked me");
                    }}>-</div>  
                </div>
                <div className="btn-container">
                    <div type="button"
                            className="link-btn"
                            onClick={() => {
                            props.history.push("/job-catagories");
                            // console.log("you clicked me");
                    }}>-</div>  
                </div>
                <div className="jobViz-parent">
                    <div className="container-cards">
                        {alphaList.map((orderedCategory) => {
                        return (
                            <div key={orderedCategory} className="" onClick={() =>setJobName(orderedCategory)}> 
                                <LevelTwoCard
                                key={orderedCategory}
                                orderedCategory={orderedCategory}
                                jobs={jobs}
                                levelOneUrl={levelOneUrl}
                                {...props}
                                />
                            </div>
                        )

                        })}
                    </div>
                </div>
            </div>
            <div className="jobviz-parent">
                <Table jobObj={jobObj} {...props} />
            </div>        
       </> 
    );

   
   
}


