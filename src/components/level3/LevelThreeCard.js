import React, { useState, useEffect } from "react";
import { makeUrlPath } from "../Helper";

export const LevelThreeCard = (props) => {
  const [endpoint, setEndpoint] = useState(false);
  let levelOneUrl = props.levelOneUrl;
  let levelTwoUrl = props.levelTwoUrl;
  let categoryStr = props.orderedCategory;
  let category = makeUrlPath(categoryStr);
  let jobs = props.jobs;

  useEffect(() => {
    let titleStr = "";
    const findObj = () => {
      jobs.forEach((job) => {
        if (job.Level3 === categoryStr) {
          titleStr = job.title;
        }
      });
    };

    const matching = () => {
      if (titleStr !== categoryStr) {
        setEndpoint(true);
      }
    };
    findObj();
    matching();
  }, [categoryStr, jobs]);

  return (
    <>
      {endpoint ? (
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
