import React, { useEffect, useState} from "react";
import JobManager from "../../modules/JobManager"
import "../styling/Style.css"
import {makeUrlPath} from "../Helper"

export const Table = (props) => {
  const jobName = props.jobName
  console.log(jobName)
  // const [isLoading, setIsLoading] = useState(true);
  const [jobData, setJobData] = useState({
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
  
  
  // useEffect(() => {
  //     JobManager.getJob(jobName).then((job) => {
  //       setJobData({
  //         id: job.id,
  //         title: job.title,
  //         Hierarchy: job.Hierarchy,
  //         OccupationType: job.OccupationType,
  //         Employment2016: job.Employment2016,
  //         Employment2026: job.Employment2026,
  //         ChgEmploy2016to26Num: job.ChgEmploy2016to26Num,
  //         ChgEmploy2016to26Perc: job.ChgEmploy2016to26Perc,
  //         PercentSelfEmployed2016: job.PercentSelfEmployed2016,
  //         OccupationalOpenings2016to2026AnnualAverage: job.TypicalOnTheJobTrainingNeededToAttainCompetencyInTheOccupation,
  //         MedianAnnualWage2017: job.MedianAnnualWage2017,
  //         TypicalEducationNeededForEntr: job.TypicalEducationNeededForEntr,
  //         WorkExperienceInARelatedOccupation: job.WorkExperienceInARelatedOccupation,
  //         TypicalOnTheJobTrainingNeededToAttainCompetencyInTheOccupation: job.TypicalOnTheJobTrainingNeededToAttainCompetencyInTheOccupation,
  //         ttl: job.ttl,
  //         Level0: job.Level0,
  //         Level4: job.Level1,
  //         Level3: job.Level2,
  //         Level2: job.Level3,
  //         Level1: job.Level4,
  //         pathString: job.pathString,
  //         Def: job.Def,
  
  //       })
        
  //     }, [jobName]
  //     )});

      return (
        <div>
          <h1>{jobData.Def}</h1>
        </div>
      )
 }

 



