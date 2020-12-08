import React, { useState, useEffect } from "react";
import JobManager from "../../modules/JobManager"
import {Title} from "../title/Title"
import "../styling/Style.css"
import {LevelFourCard} from "./LevelFourCard"
import {makeStringPath, removeDash} from "../Helper"
import { Link } from "react-router-dom";

export const LevelFourEndpointList = (props) => {
    //All the objects in jobs array
    const [jobs, setJobs] = useState([]);
    //where we set the id of the category that was clicked to sate
    const [jobName, setJobName] = useState([]);
    
    //endpoint
    let endpoint = props.category
    // the level 1 category url string we need to pass to children
    const levelOneUrl = props.levelOneUrl;
    // the level 2 category url string we need to pass to children
    const levelTwoUrl = props.levelTwoUrl;
    // the level 3 category url string we need to pass to children
    const levelThreeUrl = props.levelThreeUrl;
    console.log(levelThreeUrl)
    let levelOneString = makeStringPath(levelOneUrl);
    //the level 2 category 'normal' string we need to match to make sure 
   //we only select level 3 categories that have the same level 1 category
   let levelTwoString = makeStringPath(levelTwoUrl);
    //the level 2 category 'normal' string we need to match to make sure 
    //we only select level 4 categories that have the same level 1 category
    let levelThreeString = makeStringPath(levelThreeUrl);
    
    let endpointString = makeStringPath(endpoint);

    useEffect(() => {
        JobManager.getAll().then((jobs) => {
            setJobs(jobs)
        })
    }, []);

    //empty arry to push names of target level (Leve2)
    let levelList = []
    
    // console.log("levelList", levelList)
    const filsterlevelFour = () => jobs.filter((jobCategory) => {
        let noDash = removeDash(jobCategory.Level3)
        if (noDash === levelThreeString && jobCategory.Level4 !== "NA" && !levelList.includes(jobCategory.Level4)) {
            levelList.push(jobCategory.Level4)
        }
    });

    //call filter
    filsterlevelFour();  
     //alphabitize sorted list to use when mapping array to DOM  
    const alphaList = levelList.sort();
    // console.log("LevelList", LevelOneList)

     //This get's the id of whatever category was clicked
     const handleClick = (e) => {
        e.preventDefault();
        // console.log(e.target.id);
        setJobName(e.target.id)
        }
      

   return (
        <>
        <div>
            <Title />
        </div>
        <div className="jobviz-header">
            <h4>{endpointString}</h4>
        </div> 
        <div className="crumbs">
            <small><Link to={"/"}>Jobs</Link> > <Link to={"/job-catagories"}>Job Categories</Link> > <Link to={`/job-catagories/${levelOneUrl}`}>{levelOneString}</Link> > <Link to={`/job-catagories/${levelOneUrl}/${levelTwoUrl}`}>{levelTwoString}</Link> > <Link to={`/job-catagories/${levelOneUrl}/${levelTwoUrl/levelThreeUrl}`}>{levelThreeString}</Link> > {endpointString}</small>
           
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
                <div className="btn-container">
                <div type="button"
                        className="link-btn"
                        onClick={() => {
                        props.history.push(`/job-catagories/${levelOneUrl}/${levelTwoUrl}`);
                        // console.log("you clicked me");
                }}>-</div>  
                </div>
                 
       
                    <div className="container-cards">
                        {alphaList.map((orderedCategory) => {
                        return (
                            <div key={orderedCategory} className="l2-color-border" onClick={handleClick}> 
                                <LevelFourCard
                                    key={orderedCategory}
                                    orderedCategory={orderedCategory}
                                    jobs={jobs}
                                    levelOneUrl={levelOneUrl}
                                    levelTwoUrl={levelTwoUrl}
                                    levelThreeUrl={levelThreeUrl}
                                    {...props}
                                />
                            </div>
                        )

                        })}
                    </div>
                </div>
            
    
         
        
        
        
    </>
)
}