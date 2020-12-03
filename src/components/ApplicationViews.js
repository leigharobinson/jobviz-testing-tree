import { Route, Switch } from "react-router-dom";
import React from "react";
import Home from "./home/Home";


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
              return <Home {...props} />;
          }}
        />
        {/* ///////////////////ANIMALS/////////////////// */}
      
      </Switch>
    </React.Fragment>
  );
};

export default ApplicationViews;
