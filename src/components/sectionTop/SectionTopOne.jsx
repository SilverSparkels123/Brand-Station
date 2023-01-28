import React from "react";
import styles from "./SectionTopOne.module.css";
import IMG1 from "../../assets/sec1img1.png";
import IMG2 from "../../assets/sect1img2.png";
import SecondaryCard from "../UI/SecondaryCard";

const SectionTopOne = () => {
  return (
    <div className={styles.section__top_one_section_bg}>
      <SecondaryCard className={styles.section__top_one_section}>
        <div className={styles.section__top_one_div_offer}>
          <div>
            <h2>FLAT 50% OFF</h2>
            <h4>END OF SEASON SALE</h4>
          </div>
          <ul>
            <li>
              <a href="/">SHOP MEN</a>
            </li>
            <li>
              <a href="/">SHOP WOMEN</a>
            </li>
            <li>
              <a href="/">SHOP SPORTS</a>
            </li>
          </ul>
          <h1>BUY 2 OR MORE & GET EXTRA 15% OFF</h1>
        </div>
        <div className={styles.section__top_one_div_images}>
          <div className={styles.section__top_one_img1}>
            <img src={IMG1} alt="" />
          </div>
          <div className={styles.section__top_one_img2}>
            <img src={IMG2} alt="" />
          </div>
        </div>
      </SecondaryCard>
    </div>
  );
};

export default SectionTopOne;
