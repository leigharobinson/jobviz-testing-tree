import React, { useState, useEffect } from "react";
import JobManager from "../../modules/JobManager"
import {Title} from "../title/Title"
import "../styling/Style.css"
import {LevelOneCard} from "./LevelOneCard"
import { Link } from "react-router-dom";

export const LevelOneList = (props) => {
    //All the objects in jobs array
    const [jobs, setJobs] = useState([]);
    //where we set the id of the category that was clicked to sate
    const [levelOneStr, setLevelOneStr] = useState([]);

   //set job obj from GET call to state
    useEffect(() => {
        JobManager.getAll().then((jobs) => {
            setJobs(jobs)
        })
    }, []);

  
    //empty arry to push names of targeted level (Level1)
  
    let levelList = []
    // console.log(levelList)
    const filterLevelOne = () => jobs.map((jobCategory) => {
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
        // console.log(e.target.id);
        setLevelOneStr(e.target.id)
        }
        //  console.log(levelOneStr)

    return (
        <>
            <div>
                <Title />
            </div> 
            <div className="crumbs">
                <small><Link to={"/"}>Jobs</Link> > Job Categories</small>
            </div>
            <div className="jobviz-header" >    
                
                    <h4>Categories List</h4>
                    <small>Level1 key values that shows occupational category links for Data Base Level2 key value components</small>
                  
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
            </div>        
       </> 
    );
};