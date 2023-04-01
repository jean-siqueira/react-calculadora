import React from "react";
import "./Button.css";

export default props => {

    let classes = 'button '
    classes += props.operation ? "operation" : ""
    classes += props.duble ? "duble" : ""
    classes += props.triple ? "triple" : ""
  return (
    <button
      className={classes}
    >
      {props.label}
    </button>
  )
}
