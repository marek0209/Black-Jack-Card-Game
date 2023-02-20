import React, { children } from "react";

function ActionButton(props) {
  return <button onClick={props.fn}>{props.text}</button>;
}

export default ActionButton;
