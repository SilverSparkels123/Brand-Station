import React from "react";

const HeaderMiddleLinks = (props) => {
  return (
    <ul className={props.className}>
      <li>
        <a href="/">Help</a>
      </li>
      <li>
        <a href="/">Returns</a>
      </li>
      <li>
        <a href="/">Order Tracker</a>
      </li>
      <li>
        <a href="/">Log In</a>
      </li>
      <li>
        <a href="/">Sign Up</a>
      </li>
    </ul>
  );
};

export default HeaderMiddleLinks;
