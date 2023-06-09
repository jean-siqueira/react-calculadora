import React from "react";
import "./Button.css";

export default (props) => {
  let classes = "button ";
  classes += props.operation ? "operation" : "";
  classes += props.duble ? "duble" : "";
  classes += props.triple ? "triple" : "";

  return <button onClick={e => props.click && props.click(e.target.innerHTML)} className={classes}>{props.label}</button>;
};
