import React, { useState, useEffect } from "react";
import JobManager from "../../modules/JobManager"
import {Title} from "../title/Title"
import "../styling/Style.css"
import {LevelOneCard} from "./LevelOneCard"
import { Link } from "react-router-dom";
import  {Search}  from "../search/Search"
import {Table} from "../table/Table"

export const LevelOneList = (props) => {
    //All the objects in jobs array
    const [jobs, setJobs] = useState([]);
    //where we set the id of the category that was clicked to sate
    const [jobName, setJobName] = useState([]);


   //set job obj from GET call to state
    useEffect(() => {
        JobManager.getAll().then((jobs) => {
            setJobs(jobs)
        })
    }, []);

  
    //empty arry to push names of targeted level (Level1)
  
    let levelList = []
    // console.log(levelList)
    const filterLevelOne = () => jobs.filter((jobCategory) => {
        if (jobCategory.Level1 !== "NA" && !levelList.includes(jobCategory.Level1)) {
            levelList.push(jobCategory.Level1);
        
        }
       
    })
    //call filter
    filterLevelOne()
    //alphabitize sorted list to use when mapping array to DOM  
    const alphaList = levelList.sort()



    //This get's the id of whatever category was clicked
    const handleClick = (e) => {
        e.preventDefault();
        console.log(e.target.id);
        setJobName(e.target.id)
        }
    
    ///THis is just a test run for search bar choices
    ///is this where I should pull all titles?

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
                        {alphaList.map((orderedCategory) => {
                            return (
                                
                                <div key={orderedCategory} className="" onClick={handleClick}>
                                    <LevelOneCard
                                        
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
                <div>
                    <Table jobName={jobName} {...props} />
                </div>
            </div>        
       </> 
    );
};