import React, { useState, useEffect } from "react";
import JobManager from "../../modules/JobManager"
import {Title} from "../title/Title"
import "../styling/Style.css"
import {LevelThreeCard} from "./LevelThreeCard"
import {makeStringPath, removeDash} from "../Helper"
import { Link } from "react-router-dom";
import {Table} from "../table/Table"
import {Search} from "../search/Search"

export const LevelThreeList = (props) => {
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
    
        });

    // the level 1 category url sting we need to pass to children
    const levelOneUrl = props.levelOneUrl;
    
    // the level 2 category url sting we need to pass to children
    const levelTwoUrl = props.category;

       //we only select level 2 categories that have the same level 1 category
    let levelOneString = makeStringPath(props.levelOneUrl);
    // console.log(levelOneString)

     //the level 2 category 'normal' string we need to match to make sure 
    //we only select level 3 categories that have the same level 1 category
    let levelTwoString = makeStringPath(props.category);
    // console.log(levelTwoString)

    useEffect(() => {
        JobManager.getAll().then((jobs) => {
            setJobs(jobs)
        })
    }, []);

    //empty arry to push names of target level (Leve2)
    let levelList = []
//    console.log(levelList, "Here it is")
    const filterlevelThree = () => jobs.filter((jobCategory) => {
        let noDash = removeDash(jobCategory.Level2)
        if (noDash === levelTwoString && jobCategory.Level3 !== "NA" && !levelList.includes(jobCategory.Level3)) {
            levelList.push(jobCategory.Level3)
        }
    });

    //call filter
    filterlevelThree();  
     //alphabitize sorted list to use when mapping array to DOM  
    const alphaList = levelList.sort();
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
            arrayHold.push(job.ttl === jobName)  
            })

        // console.log(arrayHold);
        if (arrayHold.includes(true)) {
             // console.log("Array Hold had one true value")
            jobs.filter((jobObj) => {
                if(jobName === jobObj.ttl){
                    setJobObj(jobObj)
                }
            })
        } else{
            jobs.filter((jobObj) => {
                if(levelTwoString === jobObj.ttl || levelTwoString === jobObj.title){
                    setJobObj(jobObj)
                }
            })
        };     
    };

         ///THis is just a test run for search bar choices
        ///is this where I should pull all titles?
    //Search Functionality ???????
    let jobTitleList =[]
    const getAllJobNames = () => jobs.filter((job) => {
            jobTitleList.push(job.title)
        })

    getAllJobNames();
   

   return (
        <>
        <div>
            <Title />
        </div>
        <div>
                <Search jobs={jobs} jobTitleList={jobTitleList} {...props}  />
            </div>
        <div className="jobviz-header">    
                
                <h4>{levelTwoString}</h4>
             
        </div> 
        <div className="crumbs">
                    <small><Link to={"/"}>Jobs</Link> > <Link to={"/job-catagories"}>Job Categories</Link> > <Link to={`/job-catagories/${levelOneUrl}`}>{levelOneString}</Link> > {levelTwoString}</small>
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
            <div className="btn-container">
                <div type="button"
                        className="link-btn"
                        onClick={() => {
                            props.history.push(`/job-catagories/${levelOneUrl}`);
                            console.log("you clicked me");
                }}>-</div> 
            </div>
                    <div className="container-cards">
                        {alphaList.map((orderedCategory) => {
                        return (
                            <div key={orderedCategory} className="option" onClick={() =>setJobName(orderedCategory)}> 
                                <LevelThreeCard
                                    key={orderedCategory}
                                    orderedCategory={orderedCategory}
                                    jobs={jobs}
                                    levelOneUrl={levelOneUrl}
                                    levelTwoUrl={levelTwoUrl}
                                    {...props}
                                />
                            </div>
                        )

                        })}
                    </div>
                </div>
                <div className="jobviz-parent">
                    <Table jobObj={jobObj} {...props} />
                </div>
    
         
        
        
        
    </>
)
}