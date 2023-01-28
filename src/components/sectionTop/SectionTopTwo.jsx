import React from "react";
import styles from "./SectionTopTwo.module.css";
import IMG4 from "../../assets/sec1img4.png";
import { BsArrowRight } from "react-icons/bs";

const SectionTopTwo = () => {
  return (
    <div className={styles.section__top_two_section}>
      <div className={styles.section__top_two_div_shop}>
        <h1>Mangal Siwach</h1>

        <h3>
          Reborn for a generation that refuses to play by the rules. Welcome to
          a new era.
        </h3>

        <button className={styles.section__top_two_btn}>
          Shop Now <BsArrowRight />
        </button>
      </div>
      <div className={styles.section__top_two_div_img}>
        <img src={IMG4} alt="" />
      </div>
    </div>
  );
};

export default SectionTopTwo;
