import React, { useState, useEffect } from "react";
import { Title } from "../title/Title";
import "../styling/Style.css";
import JobManager from "../../modules/JobManager";
import { LrAutoSearchV2 } from "../search/LRautoSearchV2";
import { Table } from "../table/Table";

export const Jobs = (props) => {
  const [jobs, setJobs] = useState([]);
  const [jobTitleList, setJobTitleList] = useState([]);
  const jobObj = "";

  //set Array of JobObjects to State
  useEffect(() => {
    JobManager.getAll().then((jobs) => {
      setJobs(jobs);
    });
  }, []);

  //Once Jobs is set to state
  useEffect(() => {
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

  return (
    <>
      <div>
        <Title />
      </div>

      <div>
        <LrAutoSearchV2 jobs={jobs} jobTitleList={jobTitleList} {...props} />
      </div>
      <div className="jobviz-parent">
        <div className="container-cards">
          <div
            className="option"
            onClick={() => {
              props.history.push("/job-catagories");
              // console.log("you clicked me");
            }}
          >
            <div className="jobviz-parent-card">
              <div type="button" className="link-btn">
                +
              </div>

              <p>Jobs</p>
            </div>
          </div>
        </div>
      </div>
      <div className="jobviz-parent">
        <Table jobObj={jobObj} {...props} />
      </div>
    </>
  );
};
