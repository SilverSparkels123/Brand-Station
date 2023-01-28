import React from "react";
import styles from "./FooterCredits.module.css";
import { BsFacebook, BsLinkedin } from "react-icons/bs";
import { AiFillInstagram } from "react-icons/ai";

const FooterCredits = () => {
  return (
    <section className={styles.footer__credits_section}>
      <ul className={styles.footer__credits_section_links}>
        <li className={styles.footer__credits_section_link}>
          <a href="/">Privacy Policy</a>
        </li>
        <li className={styles.footer__credits_section_link}>
          <a href="/">Terms & Conditions</a>
        </li>
        <li>
          <a href="/">Cookies</a>
        </li>
      </ul>
      <ul className={styles.footer__credits_section_socials}>
        <li>
          <a href="/">
            <BsFacebook />
          </a>
        </li>
        <li>
          <a href="/">
            <BsLinkedin />
          </a>
        </li>
        <li>
          <a href="/">
            <AiFillInstagram
              className={styles.footer__credits_section_social_ig}
            />
          </a>
        </li>
      </ul>
      <p>
        &#169; 2023 <span>Brand Station</span>. All Rights Reserved.
      </p>
    </section>
  );
};

export default FooterCredits;
