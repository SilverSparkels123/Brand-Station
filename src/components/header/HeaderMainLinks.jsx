import React from "react";

const HeaderMainLinks = (props) => {
  return (
    <ul className={props.className}>
      <li>
        <a href="/">Men</a>
      </li>
      <li>
        <a href="/">Women</a>
      </li>
      <li>
        <a href="/">Kids</a>
      </li>
      <li>
        <a href="/">Sports</a>
      </li>
      <li>
        <a href="/">Brands</a>
      </li>
      <li>
        <a href="/">Collections</a>
      </li>
    </ul>
  );
};

export default HeaderMainLinks;
