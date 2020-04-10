import React, { Fragment } from "react";
import spinner from "./spinner.gif";

const Spinner = () => {
  return (
    <Fragment>
      <img src={spinner} alt="Waiting to load spinner" style={spinnerStyle} />
    </Fragment>
  );
};

const spinnerStyle = {
  width: "13%",
  margin: "20% auto",
  display: "block",
};

export default Spinner;
