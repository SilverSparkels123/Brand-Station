import React from "react";
import SecondaryCard from "../UI/SecondaryCard";
import styles from "./SectionNewArrivals.module.css";
import SectionNewArrivalsBody from "./SectionNewArrivalsBody";
import SectionNewArrivalsHeader from "./SectionNewArrivalsHeader";

const SectionNewArrivals = () => {
  // console.log(linkActive);
  return (
    <SecondaryCard className={styles.section__new_arrivals_section}>
      <SectionNewArrivalsHeader />
      <SectionNewArrivalsBody />
    </SecondaryCard>
  );
};

export default SectionNewArrivals;
