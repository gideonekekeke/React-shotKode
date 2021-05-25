import React, { useState } from "react";
import CodeView from "./CodeView/CodeView";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Getstarted from "../src/Register/Getstarted";
import FileUploadScreen from "./Register/SignupAuth/SignupAuth";
import SignupAuth from "./Register/SignupAuth/SignupAuth";
import TeachersForm from "../src/TeachersForm/TeachersForm";
import MainDash from "./Dashboard/MainDash";
import TeacherProfile from "./TeachersForm/TeacherProfile";
import { GlobalProvider } from "./AuthState/GlobalContext";
import MainDash1 from "./SchoolDashboard/MainDash1";
import SchoolProfile from "./Register/SignupAuth/SchoolProfile";
import Login from "./Login/Login";
import Connecting1 from "./ConnectingPage/Connecting1";
import Connecting2 from "./ConnectingPage/Connecting2";
import Connecting3 from "./ConnectingPage/Connecting3";

function App() {
  return (
    <>
      <GlobalProvider>
        <Router>
          <Switch>
            <Route exact path="/" component={CodeView} />

            <Route path="/profile" component={SchoolProfile} />
            <Route path="/login" component={Login} />
            <Route path="/connecting" component={Connecting1} />
            <Route path="/code" component={Connecting2} />
            <Route path="/connected" component={Connecting3} />
            <Route path="/start" component={Getstarted} />
            <Route path="/signupschool" component={SignupAuth} />
            <Route path="/signupteacher" component={TeachersForm} />
            <Route path="/teacherdash" component={MainDash} />
            <Route path="/schooldash" component={MainDash1} />
          </Switch>
        </Router>
      </GlobalProvider>
    </>
  );
}

export default App;
