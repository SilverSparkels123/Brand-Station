import React from "react";
import SecondaryCard from "../UI/SecondaryCard";
import styles from "./SectionJoin.module.css";
import { BsArrowRight } from "react-icons/bs";

const SectionJoin = () => {
  return (
    <div className={styles.section__join_section_bg}>
      <SecondaryCard className={styles.section__join_section}>
        <div className={styles.section__join_div}>
          <h3>
            JOIN BRAND STATION AND <br />
            GET 15% EXTRA OFF
          </h3>
          <a href="/" className={styles.section__join_btn}>
            SIGN UP NOW <BsArrowRight />
          </a>
        </div>
      </SecondaryCard>
    </div>
  );
};

export default SectionJoin;
