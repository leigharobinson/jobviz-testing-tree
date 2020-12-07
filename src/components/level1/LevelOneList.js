import React, { useState, useEffect } from "react";
import JobManager from "../../modules/JobManager"
import {Title} from "../title/Title"
import "../styling/Style.css"
import {LevelOneCard} from "./LevelOneCard"
import {makeStringPath, removeDash} from "../Helper"
import { Link } from "react-router-dom";

export const LevelOneList = (props) => {
    //All the objects in jobs array
    const [jobs, setJobs] = useState([]);
    //where we set the id of the category that was clicked to sate
      const [levelTwoStr, setLevelTwoStr] = useState([]);
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

    const filsterlevelTwo = () => jobs.map((jobCategory) => {
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


     //This get's the id of whatever category was clicked
     const handleClick = (e) => {
        e.preventDefault();
        // console.log(e.target.id);
        setLevelTwoStr(e.target.id)
        }
        //  console.log(levelTwoStr)


    return (
        <>
            <div>
                <Title />
            </div>        
            <div className="jobviz-parent">    
                <div className="crumbs">
                    <h6><Link to={"/"}>Jobs</Link> > <Link to={"/job-catagories"}>Job Categories</Link> > {levelOneString}</h6>
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
                <div className="jobs-parent">
                    <div className="container-cards">
                        {alphaList.map((orderedCategory) => {
                        return (
                            <div key={orderedCategory} className="" onClick={handleClick}> 
                                <LevelOneCard
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
       </> 
    );

   
   
}


