import { Route, Switch } from "react-router-dom";
import React from "react";
import {Jobs} from "./jobs/Jobs";
import {JobCatagoriesList} from "./jobsCategories/JobCatagoriesList"
import {Architecture} from "./level2/ArchitectureListL1"
import {Arts} from "./level2/ArtsListL1"
import {ArtDesignWorkers} from "./level3/ArtDesignWorkersL2"
import {ArtistsRelatedWorkers} from "./level4/Artists&RelatedWorkersL3"
import {LevelOneList} from "./level1/LevelOneList"
import {LevelTwoList} from "./level2/LevelTwoList"
//only include these once they are built - previous practice exercise
// import LocationList from "./location/LocationList";
// import LocationDetail from "./location/LocationDetail";
// import LocationForm from "./location/LocationForm";
// import LocationEditForm from "./location/LocationEditForm";

// import AnimalList from "./animal/AnimalList";
// import AnimalDetail from "./animal/AnimalDetail";
// import AnimalForm from "./animal/AnimalForm";
// import AnimalEditForm from "./animal/AnimalEditForm";

// import EmployeeList from "./employee/EmployeeList";
// import EmployeeForm from "./employee/EmployeeForm";
// import EmployeeEditForm from "./employee/EmployeeEditForm";
// import EmployeeWithAnimals from "./employee/EmployeeWithAnimals";

// import OwnerList from "./owner/OwnerList";
// import OwnerForm from "./owner/OwnerForm";
// import OwnerEditForm from "./owner/OwnerEditForm";
// import Login from "./auth/Login";

// import NotFoundID from "./animal/IdNotFound";
{
  /* // Check if credentials are in session storage returns true/false */
}


const ApplicationViews = () => {
  return (
    <React.Fragment>
      <Switch>
        {/* //HOME */}
        <Route
          exact
          path="/"
          render={(props) => {
              return <Jobs {...props} />;
          }}
        />
        {/* ///////////////////Job Catagories/////////////////// */}
        <Route
          exact
          path="/job-catagories"
          render={(props) => {
              return <JobCatagoriesList {...props} />;
          }}
        />
        {/* <Route
          exact
          path="/job-catagories/architecture-&-engineering-occupations"
          render={(props) => {
              return <Architecture {...props} />;
          }}
        /> */}
        {/* <Route
          exact
          path="/job-catagories/arts,-design,-etc"
          render={(props) => {
              return <Arts {...props} />;
          }}
        /> */}
        {/* <Route
          exact
          path="/job-catagories/arts,-design,-etc/art-&-design-workers"
          render={(props) => {
              return <ArtDesignWorkers {...props} />;
          }}
        /> */}
        <Route
         exact
          path="/job-catagories/:category"
          render={(props) => {
              return <LevelOneList category={props.match.params.category} {...props} />;
          }}
        />
        <Route
        exact
          path="/job-catagories/:levelOneUrl/:category"
          render={(props) => {
              return <LevelTwoList levelOneUrl={props.match.params.levelOneUrl} category={props.match.params.category} {...props} />;
          }}
        />
        {/* <Route
          exact
          path="/job-catagories/arts,-design,-etc/art-&-design-workers/artists-&-related-workers"
          render={(props) => {
              return <ArtistsRelatedWorkers {...props} />;
          }}
        /> */}
      </Switch>
    </React.Fragment>
  );
};

export default ApplicationViews;
