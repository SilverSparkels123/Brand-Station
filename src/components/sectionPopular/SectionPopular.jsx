import React from "react";
import SecondaryCard from "../UI/SecondaryCard";
import styles from "./SectionPopular.module.css";
import { BsArrowRight } from "react-icons/bs";

const SectionPopular = () => {
  return (
    <SecondaryCard className={styles.section__popular_section}>
      <h2>Popular right now</h2>
      <ul className={styles.section__popular_links}>
        <li>
          <a href="/">
            Samba <BsArrowRight className={styles.section__popular_link_icon} />
          </a>
        </li>
        <li>
          <a href="/">
            Argentina{" "}
            <BsArrowRight className={styles.section__popular_link_icon} />
          </a>
        </li>
        <li>
          <a href="/">
            NMD <BsArrowRight className={styles.section__popular_link_icon} />
          </a>
        </li>
        <li>
          <a href="/">
            Sports{" "}
            <BsArrowRight className={styles.section__popular_link_icon} />
          </a>
        </li>
        <li>
          <a href="/">
            Shoes <BsArrowRight className={styles.section__popular_link_icon} />
          </a>
        </li>
        <li>
          <a href="/">
            Football{" "}
            <BsArrowRight className={styles.section__popular_link_icon} />
          </a>
        </li>
      </ul>
    </SecondaryCard>
  );
};

export default SectionPopular;
