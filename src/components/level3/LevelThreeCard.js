import React, { useState, useEffect } from "react";
import { makeUrlPath } from "../Helper";

export const LevelThreeCard = (props) => {
  const [endpoint, setEndpoint] = useState(true);
  let levelOneUrl = props.levelOneUrl;
  let levelTwoUrl = props.levelTwoUrl;
  let categoryStr = props.orderedCategory;
  let category = makeUrlPath(categoryStr);

  let jobs = props.jobs;

  useEffect(() => {
    // console.log(props.orderedCategory, "");
    let titleStr = "";
    const findObj = () => {
      jobs.forEach((job) => {
        if (job.Level3 === categoryStr) {
          // console.log(job.Level3, "TEST");
          titleStr = job.title;
          // console.log(titleStr, "TItle string");
        }
      });
    };

    const matching = () => {
      if (titleStr !== categoryStr) {
        // console.log("titleStr", titleStr);
        setEndpoint(false);
      }
    };
    findObj();
    matching();
  }, [categoryStr, jobs]);

  return (
    <>
      {!endpoint ? (
        <div className="jobviz-parent-card">
          <div className="btn-container">
            <div
              type="button"
              className="link-btn"
              onClick={() => {
                props.history.push(
                  `/job-catagories/${levelOneUrl}/${levelTwoUrl}/${category}`
                );
              }}
            >
              +
            </div>
          </div>
          <div className="listed-categories">{categoryStr}</div>
        </div>
      ) : (
        <div className="jobviz-parent-card">
          <div className="btn-container">
            <div
              type="button"
              className="end-btn"
              onClick={() => {
                props.history.push(
                  `/job-catagories/${levelOneUrl}/${levelTwoUrl}/${category}/endpoint`
                );
              }}
            >
              🥨
            </div>
          </div>
          <div id={categoryStr} className="listed-categories">
            {categoryStr}
          </div>
        </div>
      )}
    </>
  );
};
