import React from "react";
import MainCard from "../UI/MainCard";
import styles from "./HeaderMiddle.module.css";
import HeaderMiddleLinks from "./HeaderMiddleLinks";

const HeaderMiddle = (props) => {
  return (
    <div className={`${styles.header__middle_section} ${props.className}`}>
      <MainCard className={styles.header__middle_card}>
        <HeaderMiddleLinks className={styles.header__middle_links} />
      </MainCard>
    </div>
  );
};

export default HeaderMiddle;
