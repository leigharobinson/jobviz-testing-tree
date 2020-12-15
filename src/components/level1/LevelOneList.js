import React, { useState, useEffect } from "react";
import JobManager from "../../modules/JobManager"
import {Title} from "../title/Title"
import "../styling/Style.css"
import {LevelOneCard} from "./LevelOneCard"
import { Link } from "react-router-dom";
import {Table} from "../table/Table"
import { Autocomplete } from "../search/OldSearch"

export const LevelOneList = (props) => {
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

   //set job obj from GET call to state
    useEffect(() => {
        JobManager.getAll().then((jobs) => {
            setJobs(jobs)
        })
    }, []);

  
    //empty arry to push names of targeted level (Level1)
  
    let levelList = []
    // console.log(levelList)
    const filterLevelOne = () => jobs.forEach((jobCategory) => {
        if (jobCategory.Level1 !== "NA" && !levelList.includes(jobCategory.Level1)) {
            // levelList.push(jobCategory.Level1);
            return levelList.push(jobCategory.Level1);
        }
       
    })
    //call filter
    filterLevelOne()
    //alphabitize sorted list to use when mapping array to DOM  
    const alphaList = levelList.sort()


    //OBJECT 
    //This get's the id of whatever category was clicked
    //THis is the Functionality to get object for Table
    useEffect(() => {
        getClickedJobObject();
        }, )
            
    const getClickedJobObject = () => {
        const arrayHold = [];
        jobs.forEach(function (job) {
            arrayHold.push(job.ttl === jobName)  
            })

        // console.log(arrayHold);
        if (arrayHold.includes(true)) {
             // console.log("Array Hold had one true value")
            jobs.forEach((jobObj) => {
                if(jobName === jobObj.ttl || jobName === jobObj.T){
                    return setJobObj(jobObj);
                }
            })
        } else{
            return setJobObj("");
        };     
    };

        
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
       

    return (
        <>
            <div>
                <Title />
            </div>
            <div>
                <Autocomplete jobs={jobs} jobTitleList={jobTitleList} {...props}  />
            </div>
            <div className="jobviz-header" >    
                
                    <h4>Categories List</h4>
                  
            </div>  
            <div className="crumbs">
                <small><Link to={"/"}>Jobs</Link> > Job Categories</small>
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
                <div className="jobs-parent">
                    <div className="container-cards">
                        {alphaList.map((orderedCategory, i) => {
                            return (
                                
                                <div key={i} onClick={() =>setJobName(orderedCategory)}  className="" >
                                    <LevelOneCard
                                        
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
            <div className="jobviz-parent">
                <Table jobObj={jobObj} {...props} />
            </div>
       </> 
    );
};