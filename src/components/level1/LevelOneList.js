import React, { useState, useEffect } from "react";
import JobManager from "../../modules/JobManager";
import { Title } from "../title/Title";
import "../styling/Style.css";
import { LevelOneCard } from "./LevelOneCard";
import { Link } from "react-router-dom";
import { Table } from "../table/Table";
import { LrAutoSearchV2 } from "../search/LRautoSearchV2";

export const LevelOneList = (props) => {
  //All the objects in jobs array
  const [jobs, setJobs] = useState([]);
  //Alphabetical list of job Names
  const [alphaList, setAlphaList] = useState([]);
  //where I set the id of the category that was clicked to sate
  const [jobTitleList, setJobTitleList] = useState([]);
  //where I set the id of the category that was clicked to sate
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

  //set job obj from GET call to state
  useEffect(() => {
    JobManager.getAll().then((jobs) => {
      setJobs(jobs);
    });
  }, []);

  //Set Auto
  useEffect(() => {
    const filterLevelOne = () => {
      let levelList = [];

      jobs.forEach((jobCategory) => {
        if (
          jobCategory.Level1 !== "NA" &&
          !levelList.includes(jobCategory.Level1)
        ) {
          // levelList.push(jobCategory.Level1);
          return levelList.push(jobCategory.Level1);
        }
      });
      let sortedList = levelList.sort();
      setAlphaList(sortedList);
    };

    ////Call the Function
    filterLevelOne();

    //get all job Titles for AutoSearch
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
  }, [jobs]);

  useEffect(() => {
    const getClickedJobObject = () => {
      const arrayHold = [];
      jobs.forEach(function (job) {
        arrayHold.push(job.ttl === jobName);
      });

      if (arrayHold.includes(true)) {
        // console.log("Array Hold had one true value")
        jobs.forEach((jobObj) => {
          if (jobName === jobObj.ttl || jobName === jobObj.T) {
            return setJobObj(jobObj);
          }
        });
      } else {
        return setJobObj("");
      }
    };
    ////Call the Function
    getClickedJobObject();
  }, [jobName, jobs]);

  return (
    <>
      <div>
        <Title />
      </div>
      <div>
        <LrAutoSearchV2 jobs={jobs} jobTitleList={jobTitleList} {...props} />
      </div>
      <div className="jobviz-header">
        <h4>Categories List</h4>
      </div>
      <div className="crumbs">
        <small>
          <Link to={"/"}>Jobs</Link> > Job Categories
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
        <div className="jobs-parent">
          <div className="container-cards">
            {alphaList.map((orderedCategory, i) => {
              return (
                <div
                  key={i}
                  // onClick={() => setJobName(orderedCategory)}
                  className="option"
                >
                  <LevelOneCard
                    key={orderedCategory}
                    orderedCategory={orderedCategory}
                    jobs={jobs}
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
