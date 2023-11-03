import React from "react";
import AdminPlanner from "./AdminPlanner";

function Layout(props) {
  return (
    <div className="layout">
      <AdminPlanner />
      {props.children}
      {/* <h1>footer</h1> */}
    </div>
  );
}

export default Layout;
