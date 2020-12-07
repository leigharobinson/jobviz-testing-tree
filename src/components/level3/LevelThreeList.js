import React, { useState, useEffect } from "react";
import JobManager from "../../modules/JobManager"
import {Title} from "../title/Title"
import "../styling/Style.css"
import {LevelThreeCard} from "./LevelThreeCard"
import {makeStringPath, removeDash} from "../Helper"
import { Link } from "react-router-dom";

export const LevelThreeList = (props) => {
    //All the objects in jobs array
    const [jobs, setJobs] = useState([]);
    //where we set the id of the category that was clicked to sate
    const [levelThreeStr, setLevelThreeStr] = useState([]);
    // the level 1 category url sting we need to pass to children
    const levelOneUrl = props.levelOneUrl;
    // the level 2 category url sting we need to pass to children
    const levelTwoUrl = props.category;
       //we only select level 2 categories that have the same level 1 category
    let levelOneString = makeStringPath(props.levelOneUrl);
     //the level 2 category 'normal' string we need to match to make sure 
    //we only select level 3 categories that have the same level 1 category
    let levelTwoString = makeStringPath(props.category);

    useEffect(() => {
        JobManager.getAll().then((jobs) => {
            setJobs(jobs)
        })
    }, []);

    //empty arry to push names of target level (Leve2)
    let levelList = []
//    console.log(levelList, "Here it is")
    const filsterlevelThree = () => jobs.map((jobCategory) => {
        if (removeDash(jobCategory.Level2) === levelTwoString && jobCategory.Level3 !== "NA" && !levelList.includes(jobCategory.Level3)) {
            levelList.push(jobCategory.Level3)
        }
    });

    //call filter
    filsterlevelThree();  
     //alphabitize sorted list to use when mapping array to DOM  
    const alphaList = levelList.sort();
    // console.log("LevelList", LevelOneList)

     //This get's the id of whatever category was clicked
     const handleClick = (e) => {
        e.preventDefault();
        // console.log(e.target.id);
        setLevelThreeStr(e.target.id)
        }
        //  console.log(levelTwoStr)

   return (
        <>
        <div>
            <Title />
        </div>
        <div className="crumbs">
                    <small><Link to={"/"}>Jobs</Link> > <Link to={"/job-catagories"}>Job Categories</Link> > <Link to={`/job-catagories/${levelOneUrl}`}>{levelOneString}</Link> > {levelTwoString}</small>
        </div>  
        <div className="jobviz-header">    
                
                    <h4>{levelTwoString}</h4>
                    <small>Level Three that shows selection options for next level (level4)</small>
                 
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
                            <div key={orderedCategory} className="l2-color-border" onClick={handleClick}> 
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
            
    
         
        
        
        
    </>
)
}