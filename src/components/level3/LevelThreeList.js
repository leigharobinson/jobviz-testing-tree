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
    const [levelFourStr, setLevelFourStr] = useState([]);
    // the level 1 category url sting we need to pass to children
    const levelOneUrl = props.levelOneUrl;
    // the level 2 category url sting we need to pass to children
    const levelTwoUrl = props.levelTwoUrl;
    // the level 3 category url sting we need to pass to children
    const levelThreeUrl = props.category;
    
    let levelOneString = makeStringPath(props.levelOneUrl);
    //the level 2 category 'normal' string we need to match to make sure 
   //we only select level 3 categories that have the same level 1 category
   let levelTwoString = makeStringPath(props.levelTwoUrl);
    //the level 2 category 'normal' string we need to match to make sure 
    //we only select level 4 categories that have the same level 1 category
    let levelThreeString = makeStringPath(props.category);
    // console.log(levelThreeString)

    useEffect(() => {
        JobManager.getAll().then((jobs) => {
            setJobs(jobs)
        })
    }, []);

    //empty arry to push names of target level (Leve2)
    let levelList = []
    
    // console.log("levelList", levelList)
    const filsterlevelFour = () => jobs.map((jobCategory) => {
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
        setLevelFourStr(e.target.id)
        }
        //  console.log(levelTwoStr)

   return (
        <>
        <div>
            <Title />
        </div>
        <div className="jobviz-parent">    
            <div className="crumbs">
                        <h6><Link to={"/"}>Jobs</Link> > <Link to={"/job-catagories"}>Job Categories</Link> > <Link to={`/job-catagories/${levelOneUrl}`}>{levelOneString}</Link> > <Link to={`/job-catagories/${levelOneUrl}/${levelTwoUrl}`}>{levelTwoString}</Link> > {levelThreeString}</h6>
            </div>       
        </div>  
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
                <div type="button"
                        className="purple-dot-background"
                        onClick={() => {
                        props.history.push(`/job-catagories/${levelOneUrl}`);
                        // console.log("you clicked me");
                }}></div>
                 <div type="button"
                        className="purple-dot-background"
                        onClick={() => {
                        props.history.push(`/job-catagories/${levelOneUrl}/${levelTwoUrl}`);
                        // console.log("you clicked me");
                }}></div>  
       
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