import React, { useState, useEffect } from "react";
import JobManager from "../../modules/JobManager"
import {Title} from "../title/Title"
import "../styling/Style.css"
import {LevelOneCard} from "./LevelOneCard"
import {makeStringPath} from "../Helper"

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
    const filsterlevelTwo = () => jobs.map((jobCategory) => {
        if (jobCategory.Level1 === levelOneString && jobCategory.Level2 !== "NA" && !levelList.includes(jobCategory.Level2)) {
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
                <div>
                    <h4>Level Two</h4>
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

    return (
        <>

        <div className="jobviz-parent"> 
            
            <h1>A Test to see if this component is hidden or shown</h1>
            <h3>{levelOneString}</h3>
        </div>
        
    </>


    )
   
}


