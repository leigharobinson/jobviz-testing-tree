import { Route, Switch } from "react-router-dom";
import React from "react";
import {Jobs} from "./jobs/Jobs";
import {JobCatagoriesList} from "./jobsCategories/JobCatagoriesList"
import {LevelOneList} from "./level1/LevelOneList"
import {LevelTwoList} from "./level2/LevelTwoList"

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
