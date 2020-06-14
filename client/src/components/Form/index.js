import React from "react";

export function Input(props) {
  return (
    <div className="form-group">
      <input className="form-control" style={{marginBottom: 20, width: 600 }} />
    </div>
  );
}



export function FormBtn(props) {
  return (
    <button {...props} style={{marginBottom: 20, width: 300 }} className="btn btn-success">
      {props.children}
    </button>
  );
}
