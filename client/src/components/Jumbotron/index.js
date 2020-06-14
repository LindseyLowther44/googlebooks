import React from "react";
import "./style.css"


function Jumbotron({ children }) {
  return (
    <div
      style={{ height: 200, clear: "both", paddingTop: 75, textAlign: "center" }}
      className="jumbotron"
    >
      {children}
      <h1>Google Book Search!</h1>
    </div>
  );
}

export default Jumbotron;
