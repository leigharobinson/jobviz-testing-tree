import React, { useState, useEffect } from "react";
import "../styling/Style.css"
import { makeUrlPath } from '../Helper';

export const LrAutoSearch = (props) => {
const [activeOption, setActiveOption] = useState(0);
const [filteredOptions, setFilteredOptions] = useState([]);
const [showOptions, setShowOptions] = useState(false);
const [userInput, setUserInput] = useState("");
const [selectedJob, setSelectedJob] = useState("");
const jobTitleList = props.jobTitleList;
const jobs = props.jobs;
 



const onChange = (e) => {
    setUserInput(e.currentTarget.value)
    setShowOptions(true);

    setFilteredOptions(jobTitleList.filter((optionName) => 
        optionName.toLowerCase().indexOf(userInput.toLowerCase()) > -1
    ));
    
};

// console.log(filteredOptions.length, "Filtered Options")

useEffect(() => {
    setSelectedJob("")
    setShowOptions(false);
}, [])

const onClick = (e) => {   
    setSelectedJob(e.currentTarget.innerText);
    setShowOptions(false);

   
}




const onKeyDown = (e) => {
   
    // setActiveOption(e);
    // setFilteredOption(e);

    if(e.keyCode === 13){
        setUserInput(filteredOptions[activeOption])
        setShowOptions(false);
    } else if (e.keyCode ===38){
                if(activeOption === 0){
                return;
                }
        setActiveOption({ activeOption: activeOption - 1 });
    } else if (e.keyCode === 40) {
                if (activeOption === filteredOptions.length - 1) {
                console.log(activeOption, "activeOption");
                return;
                }
        setActiveOption({ activeOption: activeOption + 1 });
      }

};

////This handels the OptionList component?
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

          console.log("User Selected", userInput)
          console.log("Selected Job", selectedJob)
          
          const goToJobUrl =() => {
            jobs.forEach(function (job) {
                let category = ""
                const jobCatagories = "job-catagories"
                let levelOneUrl = ""
                let levelTwoUrl = ""
                let levelThreeUrl = ""
                
                
                if (job.Level0 === selectedJob) {
                    console.log(job.Level0, `/`)
                    props.history.push(`/`);

                } else if (job.Level1 === selectedJob && job.title === selectedJob && job.Level2 !== selectedJob && job.Level3 !== selectedJob && job.Level4 !== selectedJob) {
                    category = makeUrlPath(job.Level1);
                    console.log("Fake URL Level 1", `/${jobCatagories}/${category}`)
                    // props.history.push(`/${jobCatagories}/${category}`);

                } else if (job.Level2 === selectedJob && job.title === selectedJob && job.Level3 !== selectedJob && job.Level4 !== selectedJob) {
                    category = makeUrlPath(job.Level2);
                    levelOneUrl = makeUrlPath(job.Level1); 
                    console.log("Fake URl Level 2", `/${jobCatagories}/${levelOneUrl}/${category}/endpoint`)
                    // props.history.push(`/${jobCatagories}/${levelOneUrl}/${category}/endpoint`);

                } else if (job.Level3 === selectedJob && job.title === selectedJob && job.Level4 !== selectedJob) {
                    category = makeUrlPath(job.Level3);
                    levelOneUrl = makeUrlPath(job.Level1);
                    levelTwoUrl = makeUrlPath(job.Level2);
                    console.log("Fake URl Level 3", `/${jobCatagories}/${levelOneUrl}/${levelTwoUrl}/${category}/endpoint`)
                    // props.history.push(`/${jobCatagories}/${levelOneUrl}/${levelTwoUrl}/${category}/endpoint`);


                } else if (job.Level4 === selectedJob && job.title === selectedJob) {
                    category = makeUrlPath(job.Level4);
                    levelOneUrl = makeUrlPath(job.Level1);
                    levelTwoUrl = makeUrlPath(job.Level2);
                    levelThreeUrl = makeUrlPath(job.Level3);  
                    console.log("Fake URl Level 4", `/${jobCatagories}/${levelOneUrl}/${levelTwoUrl}/${levelThreeUrl}/${category}/endpoint`)
                    // props.history.push(`/${jobCatagories}/${levelOneUrl}/${levelTwoUrl}/${category}/${levelThreeUrl}/endpoint`);
                    } 
                
            },[]);
            
            };    
        
          goToJobUrl();
       
      
      
      
      
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
                    <div  className="searchIcon">
                        <input  type="submit" value="" className="search-icon" />
                    </div>
                      
                </div>
                <div id="float-options">
                    {optionList}
                </div>
            </div>
            </React.Fragment>
          );


};
