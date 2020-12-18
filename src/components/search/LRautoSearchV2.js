import React, { useState, useEffect } from "react";
import "../styling/Style.css";
import { makeUrlPath } from "../Helper";

export const LrAutoSearchV2 = (props) => {
  const [activeOption, setActiveOption] = useState(0);
  const [filteredOptions, setFilteredOptions] = useState([]);
  const [showOptions, setShowOptions] = useState(false);
  const [userInput, setUserInput] = useState("");
  const [selectedJob, setSelectedJob] = useState("");
  const jobTitleList = props.jobTitleList;
  const jobs = props.jobs;
  const [selectedJobObj, setSelectedJobObj] = useState({
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

  ////Here is where you filter through array of listed job titles
  const onChange = (e) => {
    setUserInput(e.currentTarget.value);
    setShowOptions(true);
    setFilteredOptions(
      jobTitleList.filter(
        (optionName) =>
          optionName.toLowerCase().indexOf(userInput.toLowerCase()) > -1
      )
    );
  };

  // console.log(filteredOptions.length, "Filtered Options")

  const onClick = (e) => {
    setSelectedJob(e.currentTarget.innerText);
    setShowOptions(false);
  };

  useEffect(() => {
    const getSelectedJobObject = () => {
      jobs.forEach(function (job) {
        if (job.title === selectedJob) {
          setSelectedJobObj(job);
        }
      });
    };
    getSelectedJobObject();
  }, [selectedJob, jobs]);

  useEffect(() => {
    const goToJobUrl = (selectedJobObj) => {
      const jobCatagories = "job-catagories";
      let category = "";
      let title = selectedJobObj.title;
      let level0 = selectedJobObj.Level0;
      let level1 = selectedJobObj.Level1;
      let level2 = selectedJobObj.Level2;
      let level3 = selectedJobObj.Level3;
      let level4 = selectedJobObj.Level4;

      if (title !== "" && title === level0) {
        // console.log(level0, `/`);
        props.history.push(`/`);
      } else if (
        title !== "" &&
        title === level1 &&
        title !== level2 &&
        title !== level3 &&
        title !== level4
      ) {
        category = makeUrlPath(level1);
        // console.log("Fake URL Level 1", `/${jobCatagories}/${category}`);
        props.history.push(`/${jobCatagories}/${category}`);
      } else if (
        title !== "" &&
        title === level2 &&
        title !== level1 &&
        title !== level3 &&
        title !== level4
      ) {
        level1 = makeUrlPath(level1);
        category = makeUrlPath(level2);
        // console.log(
        //   "Fake URl Level 2",
        //   `/${jobCatagories}/${level1}/${category}/endpoint`
        // );
        props.history.push(`/${jobCatagories}/${level1}/${category}/endpoint`);
      } else if (
        title !== "" &&
        title === level3 &&
        title !== level1 &&
        title !== level2 &&
        title !== level4
      ) {
        level1 = makeUrlPath(level1);
        level2 = makeUrlPath(level2);
        category = makeUrlPath(level3);

        // console.log(
        //   "Fake URl Level 3",
        //   `/${jobCatagories}/${level1}/${level2}/${category}/endpoint`
        // );
        props.history.push(
          `/${jobCatagories}/${level1}/${level2}/${category}/endpoint`
        );
      } else if (
        title !== "" &&
        title === level4 &&
        title !== level1 &&
        title !== level2 &&
        title !== level3
      ) {
        level1 = makeUrlPath(level1);
        level2 = makeUrlPath(level2);
        level3 = makeUrlPath(level3);
        category = makeUrlPath(level4);

        // console.log(
        //   "Fake URl Level 4",
        //   `/${jobCatagories}/${level1}/${level2}/${level3}/${category}/endpoint`
        // );
        props.history.push(
          `/${jobCatagories}/${level1}/${level2}/${level3}/${category}/endpoint`
        );
      } else {
        return;
      }
    };

    goToJobUrl(selectedJobObj);
  }, [selectedJobObj, props.history]);

  const onKeyDown = (e) => {
    if (e.keyCode === 13) {
      setUserInput(filteredOptions[activeOption]);
      setShowOptions(false);
    } else if (e.keyCode === 38) {
      if (activeOption === 0) {
        return;
      }
      setActiveOption({ activeOption: activeOption - 1 });
    } else if (e.keyCode === 40) {
      if (activeOption === filteredOptions.length - 1) {
        // console.log(activeOption, "activeOption");
        return;
      }
      setActiveOption({ activeOption: activeOption + 1 });
    }
  };

  return (
    <React.Fragment>
      <div className="jobviz-parent">
        <div className="searchBoxParent">
          <div id="search_border" className="search">
            <input
              id="search_bar"
              type="text"
              placeholder="Search Jobs"
              className="search-box"
              onChange={onChange}
              onKeyDown={onKeyDown}
              value={userInput}
            />
            <div className="searchIcon">
              <input type="submit" value="" className="search-icon" />
            </div>
          </div>
          <div id="float-options">
            {showOptions &&
              userInput &&
              (filteredOptions.length > 0 ? (
                <ul className="options">
                  {filteredOptions.map((optionName, index) => {
                    let className;
                    if (index === activeOption) {
                      className = "option-active";
                    }
                    return (
                      <li
                        className="{className}, option"
                        key={optionName}
                        onClick={onClick}
                      >
                        {optionName}
                      </li>
                    );
                  })}
                </ul>
              ) : (
                <div className="no-options">
                  <em>No Option!</em>
                </div>
              ))}
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};
