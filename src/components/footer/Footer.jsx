import React from "react";
import SecondaryCard from "../UI/SecondaryCard";
import FooterCredits from "./FooterCredits";
import FooterMain from "./FooterMain";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <div>
      <SecondaryCard className={styles.footer__section}>
        <FooterMain />
      </SecondaryCard>
      <FooterCredits />
    </div>
  );
};

export default Footer;
