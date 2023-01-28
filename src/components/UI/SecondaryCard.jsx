import React from "react";
import classes from "./SecondaryCard.module.css";

const SecondaryCard = (props) => {
  return (
    <div className={`${classes.secondarycard} ${props.className}`}>
      {props.children}
    </div>
  );
};

export default SecondaryCard;
