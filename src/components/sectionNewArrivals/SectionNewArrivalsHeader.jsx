import React, { useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import styles from "./SectionNewArrivalsHeader.module.css";

const SectionNewArrivalsHeader = () => {
  const [linkaActive, setLinkaActive] = useState(true);
  const [linkbActive, setLinkbActive] = useState(false);

  const linkaClickHandler = (e) => {
    e.preventDefault();
    if (linkaActive && e.target) {
      return;
    } else {
      setLinkaActive((prevState) => !prevState);
      setLinkbActive((prevState) => !prevState);
    }
  };

  const linkbClickHandler = (e) => {
    e.preventDefault();
    if (linkbActive && e.target) {
      return;
    } else {
      setLinkbActive((prevState) => !prevState);
      setLinkaActive((prevState) => !prevState);
    }
  };

  const slideLeft = () => {
    var slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft - 800;
    console.log("btn Clicked");
  };

  const slideRight = () => {
    var slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft + 800;
  };

  return (
    <header className={styles.section__new_arrivals_header}>
      <div className={styles.section__new_arrivals_header_links}>
        <div className={styles.section__new_arrivals_header_linka}>
          {linkaActive && (
            <FaArrowRight
              className={styles.section__new_arrivals_header_link_icon}
            />
          )}
          <a
            href="/"
            onClick={linkaClickHandler}
            className={linkaActive ? styles.linkActive : styles.linkInActive}
          >
            New Arrivals Men
          </a>
        </div>
        <div className={styles.section__new_arrivals_header_linkb}>
          {linkbActive && (
            <FaArrowRight
              className={styles.section__new_arrivals_header_link_icon}
            />
          )}
          <a
            href="/"
            onClick={linkbClickHandler}
            className={linkbActive ? styles.linkActive : styles.linkInActive}
          >
            Best of Brand Station
          </a>
        </div>
      </div>
      <div className={styles.section__new_arrivals_header_icons}>
        <FaArrowLeft
          onClick={slideLeft}
          className={styles.section__new_arrivals_header_icon}
        />
        <FaArrowRight
          onClick={slideRight}
          className={styles.section__new_arrivals_header_icon}
        />
      </div>
    </header>
  );
};

export default SectionNewArrivalsHeader;
