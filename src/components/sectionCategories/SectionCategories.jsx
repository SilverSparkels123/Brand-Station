import React from "react";
import SecondaryCard from "../UI/SecondaryCard";
import styles from "./SectionCategories.module.css";
import MensWear from "../../assets/mensWear.png";
import WomenWear from "../../assets/womenWear.png";
import SportsWear from "../../assets/sportsWear.png";

const SectionCategories = () => {
  return (
    <SecondaryCard className={styles.section__categories_section}>
      <h2>FOR WHOM YOU WANT TO SHOP?</h2>
      <div className={styles.section__categories_list}>
        <div className={styles.section__categories_item}>
          <img src={MensWear} alt="" />
          <a href="/">Mens</a>
        </div>
        <div className={styles.section__categories_item}>
          <img src={WomenWear} alt="" />
          <a href="/">Womens</a>
        </div>
        <div className={styles.section__categories_item}>
          <img src={SportsWear} alt="" />
          <a href="/">Sports</a>
        </div>
      </div>
    </SecondaryCard>
  );
};

export default SectionCategories;
