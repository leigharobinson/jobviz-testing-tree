import { Route, Switch } from "react-router-dom";
import React from "react";
import {Jobs} from "./level0/Jobs";
import {LevelOneList} from "./level1/LevelOneList"
import {LevelTwoList} from "./level2/LevelTwoList"
import {LevelTwoEndpointList} from "./level2/LevelTwoEndpointList"
import {LevelThreeList} from "./level3/LevelThreeList"
import {LevelThreeEndpointList} from "./level3/LevelThreeEndpointList"
import {LevelFourList} from "./level4/LevelFourList"
import {LevelFourEndpointList} from "./level4/LevelFourEndpointList"

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
              return <LevelOneList {...props} />;
          }}
        />
     {/* /////////////// Level two catagories and endpoinnts /////// */}
        <Route
         exact
          path="/job-catagories/:category"
          render={(props) => {
              return <LevelTwoList category={props.match.params.category} {...props} />;
          }}
        />
        <Route
        exact
          path="/job-catagories/:levelOneUrl/:category/endpoint"
          render={(props) => {
              return <LevelTwoEndpointList levelOneUrl={props.match.params.levelOneUrl} category={props.match.params.category} {...props} />;
          }}
        />
      
        <Route
        exact
          path="/job-catagories/:levelOneUrl/:category"
          render={(props) => {
              return <LevelThreeList levelOneUrl={props.match.params.levelOneUrl} category={props.match.params.category} {...props} />;
          }}
        />

        <Route
          exact
          path="/job-catagories/:levelOneUrl/:levelTwoUrl/:category/endpoint"
          render={(props) => {
              return <LevelThreeEndpointList levelOneUrl={props.match.params.levelOneUrl}  levelTwoUrl={props.match.params.levelTwoUrl} category={props.match.params.category} {...props} />;
          }}
        />

        <Route
          exact
          path="/job-catagories/:levelOneUrl/:levelTwoUrl/:category"
          render={(props) => {
              return <LevelFourList  levelOneUrl={props.match.params.levelOneUrl}  levelTwoUrl={props.match.params.levelTwoUrl} category={props.match.params.category} {...props} />;
          }}
        />
        <Route
          exact
          path="/job-catagories/:levelOneUrl/:levelTwoUrl/:levelThreeUrl/:category/endpoint"
          render={(props) => {
              return <LevelFourEndpointList  levelOneUrl={props.match.params.levelOneUrl}  levelTwoUrl={props.match.params.levelTwoUrl} levelThreeUrl={props.match.params.levelThreeUrl} category={props.match.params.category} {...props} />;
          }}
        />
       
      </Switch>
    </React.Fragment>
  );
};

export default ApplicationViews;
