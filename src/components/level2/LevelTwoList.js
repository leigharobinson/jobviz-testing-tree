import React, { useState, useEffect } from "react";
import JobManager from "../../modules/JobManager"
import {Title} from "../title/Title"
import "../styling/Style.css"
import {LevelTwoCard} from "./LevelTwoCard"
import {makeStringPath, removeDash} from "../Helper"

export const LevelTwoList = (props) => {
    //All the objects in jobs array
    const [jobs, setJobs] = useState([]);
    //where we set the id of the category that was clicked to sate
    const [levelThreeStr, setLevelThreeStr] = useState([]);
    // the level 1 category url sting we need to pass to children
    const levelOneUrl = props.levelOneUrl;
    // the level 2 category url sting we need to pass to children
    const levelTwoUrl = props.category;
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
        <div className="jobviz-parent">    
                <div>
                    <h4>Level Three</h4>
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
       
                    <div className="container-cards">
                        {alphaList.map((orderedCategory) => {
                        return (
                            <div key={orderedCategory} className="l2-color-border" onClick={handleClick}> 
                                <LevelTwoCard
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