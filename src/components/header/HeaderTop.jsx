import React from "react";
import MainCard from "../UI/MainCard";
import styles from "./HeaderTop.module.css";
import { BsGithub, BsFacebook, BsLinkedin } from "react-icons/bs";
import { AiFillInstagram } from "react-icons/ai";

const HeaderTop = (props) => {
  return (
    <div className={`${styles.header__top_section} ${props.className}`}>
      <MainCard className={styles.header__top_card}>
        <ul className={styles.header__top_socials}>
          <li>
            <a
              href="https://www.linkedin.com/in/akhil-jangra-1950bb227"
              target={`_blank`}
            >
              <BsLinkedin />
            </a>
          </li>
          <li>
            <a href="https://github.com/SilverSparkels123" target={`_blank`}>
              <BsGithub />
            </a>
          </li>
          <li>
            <a
              href="https://www.facebook.com/akhil.ak.5070?mibextid=ZbWKwL"
              target={`_blank`}
            >
              <BsFacebook />
            </a>
          </li>
          <li>
            <a
              href="https://instagram.com/akhil_8059?igshid=ZDdkNTZiNTM="
              target={`_blank`}
            >
              <AiFillInstagram className={styles.header__top_social_ig} />
            </a>
          </li>
        </ul>
        <h5>Free Delivery</h5>
      </MainCard>
    </div>
  );
};

export default HeaderTop;
