import React, { Component } from 'react';
import PropTypes from 'prop-types';
import "../styling/Style.css"
import { makeUrlPath } from '../Helper';

export class Autocomplete extends Component {
  static propTypes = {
    jobTitleList: PropTypes.instanceOf(Array).isRequired
  };
  state = {
    activeOption: 0,
    filteredOptions: [],
    showOptions: false,
    userInput: ''
  };

  onChange = (e) => {
    // console.log('onChanges');

    const { jobTitleList } = this.props;
    const userInput = e.currentTarget.value;

    const filteredOptions = jobTitleList.filter(
      (optionName) =>
        optionName.toLowerCase().indexOf(userInput.toLowerCase()) > -1
    );

    this.setState({
      activeOption: 0,
      filteredOptions,
      showOptions: true,
      userInput: e.currentTarget.value
    });
  };

  onClick = (e) => {
    this.setState({
      activeOption: 0,
      filteredOptions: [],
      showOptions: false,
      userInput: e.currentTarget.innerText
    });
  };
  onKeyDown = (e) => {
    const { activeOption, filteredOptions } = this.state;

    if (e.keyCode === 13) {
      this.setState({
        activeOption: 0,
        showOptions: false,
        userInput: filteredOptions[activeOption]
      });
    } else if (e.keyCode === 38) {
      if (activeOption === 0) {
        return;
      }
      this.setState({ activeOption: activeOption - 1 });
    } else if (e.keyCode === 40) {
      if (activeOption === filteredOptions.length - 1) {
        console.log(activeOption);
        return;
      }
      this.setState({ activeOption: activeOption + 1 });
    }
  };

  render() {
    const {
      onChange,
      onClick,
      onKeyDown,

      state: { activeOption, filteredOptions, showOptions, userInput }
    } = this;
    let optionList;
    if (showOptions && userInput) {
      if (filteredOptions.length) {
        optionList = (
          <ul className="options">
            {filteredOptions.map((optionName, index) => {
              let className;
              if (index === activeOption) {
                className = 'option-active';
              }
              return (
                <li className={className} key={optionName} onClick={onClick}>
                  {optionName}
                </li>
              );
            })}
          </ul>
        );
      } else {
        optionList = (
          <div className="no-options">
            <em>No Option!</em>
          </div>
        );
      }
    }

    ///////////try to match url path here?
    
    const gotToJobUrl =() => {
      const jobs = this.props.jobs
      // const levelOneUrl = this.props.levelOneUrl
      // const levelTwoUrl = this.props.levelTwoUrl
      // const levelThreeUrl = this.props.levelThreeUrl
      // const category = this.props.category
      var data = jobs.filter(function (job) {
      let category = ""
      const jobCatagories = "job-catagories"
      let levelOneUrl = ""
      let levelTwoUrl = ""
      let levelThreeUrl = ""
      // let levelFourUrl = ""
       
      if (job.Level0 === userInput) {
        
        console.log(job.Level0, `/`)
        // this.props.history.push(`/job-catagories/`)
      } else if (job.Level1 === userInput) {
        category = makeUrlPath(job.Level1);
        console.log("Fake URL Level 1", `/${jobCatagories}/${category}`)
        // this.props.history.push(`/job-catagories/`)
      } else if (job.Level2 === userInput) {
        category = makeUrlPath(job.Level2);
        levelOneUrl = makeUrlPath(job.Level1);
        console.log("Fake URl Level 2", `/${jobCatagories}/${levelOneUrl}/${category}/endpoint`)
          // this.props.history.push(`/job-catagories/`)
      } else if (job.Level3 === userInput) {
        category = makeUrlPath(job.Level3);
        levelOneUrl = makeUrlPath(job.Level1);
        levelTwoUrl = makeUrlPath(job.Level2);
        console.log("Fake URl Level 2", `/${jobCatagories}/${levelOneUrl}/${levelTwoUrl}/${category}/endpoint`)
          // this.props.history.push(`/job-catagories/`)
      } else if (job.Level4 === userInput) {
        category = makeUrlPath(job.Level4);
        levelOneUrl = makeUrlPath(job.Level1);
        levelTwoUrl = makeUrlPath(job.Level2);
        levelThreeUrl = makeUrlPath(job.Level3);
        // levelFourUrl = makeUrlPath(job.Level4)
        console.log("Fake URl Level 4", `/${jobCatagories}/${levelOneUrl}/${levelTwoUrl}/${levelThreeUrl}/${category}/endpoint`)
      } 
        // this.props.history.push(`/job-catagories/${jobName}`)
      },[]);
      //  console.log(jobName, "jobName")

  // console.table(job);
      // if (jobName === "") {
      // return;
      // } else {
      //   const jobUrl = makeUrlPath(jobName);
      //   if(levelOneUrl === undefined) {
      //     this.props.history.push(`/job-catagories/${jobUrl}`)
      //   } else if (levelOneUrl !== undefined && levelTwoUrl === undefined) {
      //     this.props.history.push(`/job-catagories/${levelOneUrl}/${jobUrl}`)
      //   } else if (levelOneUrl !== undefined &&  levelTwoUrl !== undefined && levelThreeUrl === undefined) {
      //     this.props.history.push(`/job-catagories/${levelOneUrl}/${levelTwoUrl}/${jobUrl}`)
      //   } 
      // } 
     
  }

  gotToJobUrl()




    return (
      <React.Fragment> 

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
                    <input  type="submit" value="" className="search-icon" />
                </div>
                
            </div>
            <div id="float-options">
                {optionList}
            </div>
            
        </div>
      </React.Fragment>
    );
  }
}

export default Autocomplete;
