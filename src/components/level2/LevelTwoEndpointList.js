import React, { useState, useEffect } from "react";
import JobManager from "../../modules/JobManager";
import { Title } from "../title/Title";
import "../styling/Style.css";
import { LevelTwoCard } from "./LevelTwoCard";
import { makeStringPath, removeDash } from "../Helper";
import { Link } from "react-router-dom";
import { Table } from "../table/Table";
import { LrAutoSearchV2 } from "../search/LRautoSearchV2";

export const LevelTwoEndpointList = (props) => {
  //Array of job objects
  const [jobs, setJobs] = useState([]);
  //Alphabetical list of job Names
  const [alphaList, setAlphaList] = useState([]);
  //where I set the id of the category that was clicked to sate
  const [jobTitleList, setJobTitleList] = useState([]);
  //Where I set name of job clicked to state
  const [jobName, setJobName] = useState([]);
  //Where the clicked job's object is made avalile
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

  //endpoint
  let endpoint = props.category;
  // console.log("endpoint", endpoint)
  // the level 1 category url sting we need to pass to children
  let levelOneUrl = props.levelOneUrl;
  // console.log("levelONe URL",levelOneUrl)
  //the level 1 category 'normal' string we need to match to make sure
  //we only select level 2 categories that have the same level 1 category
  let levelOneString = makeStringPath(levelOneUrl);
  let endpointString = makeStringPath(endpoint);

  useEffect(() => {
    JobManager.getAll().then((jobs) => {
      setJobs(jobs);
      setJobName(endpointString);
    });
  }, [endpointString]);

  useEffect(() => {
    //Render Alphabatized selection to page
    const filterlevelTwo = () => {
      let levelList = [];
      jobs.forEach((jobCategory) => {
        let noDash = removeDash(jobCategory.Level1);
        // console.log(noDash)
        if (
          noDash === levelOneString &&
          jobCategory.Level2 !== "NA" &&
          !levelList.includes(jobCategory.Level2)
        ) {
          levelList.push(jobCategory.Level2);
        }
      });

      let sortedList = levelList.sort();
      setAlphaList(sortedList);
    };
    filterlevelTwo();
    ///THis is just a test run for search bar choices
    const getAllJobNames = (jobs) => {
      let jobTList = [];
      jobs.forEach((job) => {
        if (!jobTList.includes(job.title)) {
          jobTList.push(job.title);
        }
      });
      setJobTitleList(jobTList);
    };
    ////Call the Function
    getAllJobNames(jobs);
  }, [jobs, levelOneString]);

  useEffect(() => {
    const getClickedJobObject = () => {
      const arrayHold = [];
      jobs.forEach(function (job) {
        arrayHold.push(job.ttl === jobName);
      });

      // console.log(arrayHold);
      if (arrayHold.includes(true)) {
        // console.log("Array Hold had one true value")
        jobs.forEach((jobObj) => {
          if (jobName === jobObj.ttl) {
            setJobObj(jobObj);
          }
        });
      } else {
        jobs.forEach((jobObj) => {
          let noDashTtl = removeDash(jobObj.ttl);
          let noDashObj = removeDash(jobObj.title);
          if (endpointString === noDashTtl || endpointString === noDashObj) {
            setJobObj(jobObj);
          }
        });
      }
    };
    getClickedJobObject();
  }, [jobName, endpointString, jobs]);

  return (
    <>
      <div>
        <Title />
      </div>
      <div>
        <LrAutoSearchV2 jobs={jobs} jobTitleList={jobTitleList} {...props} />
      </div>

      <div className="jobviz-header">
        <h4>{endpointString}</h4>
      </div>
      <div className="crumbs">
        <small>
          <Link to={"/"}>Jobs</Link> >{" "}
          <Link to={"/job-catagories"}>Job Categories</Link> >{" "}
          <Link to={`/job-catagories/${levelOneUrl}`}>{levelOneString}</Link> >{" "}
          {endpointString}
        </small>
      </div>
      <div className="jobviz-parent">
        <div className="btn-container">
          <div
            type="button"
            className="link-btn"
            onClick={() => {
              props.history.push("/");
              // console.log("you clicked me");
            }}
          >
            -
          </div>
        </div>
        <div className="btn-container">
          <div
            type="button"
            className="link-btn"
            onClick={() => {
              props.history.push("/job-catagories");
              // console.log("you clicked me");
            }}
          >
            -
          </div>
        </div>
        <div className="jobViz-parent">
          <div className="container-cards">
            {alphaList.map((orderedCategory, i) => {
              return (
                <div
                  key={i}
                  className="option"
                  onClick={() => setJobName(orderedCategory)}
                >
                  <LevelTwoCard
                    key={orderedCategory}
                    orderedCategory={orderedCategory}
                    jobs={jobs}
                    levelOneUrl={levelOneUrl}
                    {...props}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div className="jobviz-parent">
        <Table jobObj={jobObj} {...props} />
      </div>
    </>
  );
};
