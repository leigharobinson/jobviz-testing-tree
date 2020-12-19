import React, { useState, useEffect } from "react";
import { makeUrlPath } from "../Helper";

export const LevelOneCard = (props) => {
  const [endpoint, setEndpoint] = useState(true);

  const jobs = props.jobs;
  //String of Category
  let categoryStr = props.orderedCategory;

  //URL appropriate String of Category
  let category = makeUrlPath(categoryStr);
  // console.log(category)

  useEffect(() => {
    let titleStr = "";
    const findObj = () => {
      jobs.forEach((job) => {
        if (job.Level1 === categoryStr) {
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
                props.history.push(`/job-catagories/${category}`);
              }}
            >
              +
            </div>
          </div>
          <div id={categoryStr} className="listed-categories option">
            {categoryStr}
          </div>
        </div>
      ) : (
        <div className="jobviz-parent-card">
          <div id={categoryStr} className="listed-categories"></div>
        </div>
      )}
    </>
  );
};
