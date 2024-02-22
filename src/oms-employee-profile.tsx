import React from "react";
import ReactDOM from "react-dom";
import singleSpaReact from "single-spa-react";
import EmployeeProfile from "./pages/Profilepage/EmployeeProfile";

const lifecycles = singleSpaReact({
  React,
  ReactDOM,
  rootComponent: EmployeeProfile,
 
});

export const { bootstrap, mount, unmount } = lifecycles;
