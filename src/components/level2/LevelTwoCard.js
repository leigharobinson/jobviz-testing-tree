import React, { useState, useEffect } from "react";
import { makeUrlPath } from "../Helper";

export const LevelTwoCard = (props) => {
  const [endpoint, setEndpoint] = useState(true);

  let jobs = props.jobs;
  let levelOneUrl = props.levelOneUrl;
  let categoryStr = props.orderedCategory;
  // console.log("THis is category string", categoryStr)
  let category = makeUrlPath(categoryStr);

  // LR look back at this, there must be simpler way

  useEffect(() => {
    let titleStr = "";
    const findObj = () => {
      jobs.forEach((job) => {
        if (job.Level2 === categoryStr) {
          titleStr = job.title;
        }
      });
    };

    const matching = () => {
      if (titleStr !== categoryStr) {
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
                  `/job-catagories/${levelOneUrl}/${category}`
                );
              }}
            >
              +
            </div>
          </div>
          <div id={categoryStr} className="listed-categories">
            {categoryStr}
          </div>
        </div>
      ) : (
        <div className="jobviz-parent-card">
          <div className="btn-container">
            <div
              type="button"
              className="end-btn"
              onClick={() => {
                props.history.push(
                  `/job-catagories/${levelOneUrl}/${category}/endpoint`
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
