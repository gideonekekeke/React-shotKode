import React from "react";
import { BrowserRouter, Switch, Redirect } from "react-router-dom";
import { LastLocationProvider } from "react-router-last-location";

function MainRoute() {
  return (
    <BrowserRouter>
      <LastLocationProvider>
        <Switch></Switch>
      </LastLocationProvider>
    </BrowserRouter>
  );
}

export default MainRoute;
