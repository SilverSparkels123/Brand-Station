import React from "react";
import MainCard from "../UI/MainCard";
import styles from "./HeaderMain.module.css";
import {
  AiOutlineUser,
  AiOutlineHeart,
  AiOutlineShoppingCart,
  AiOutlineSearch,
} from "react-icons/ai";
import HeaderMainLinks from "./HeaderMainLinks";
import HeaderMainLinksBtn from "./HeaderMainLinksBtn";

import LOGO from "../../assets/logo.png";

const HeaderMain = (props) => {
  return (
    <div className={`${styles.header__main_section} ${props.className}`}>
      <MainCard className={styles.header__main_card}>
        <HeaderMainLinksBtn className={styles.header__main_links_btn} />
        <div className={styles.header__main_logo}>
          <img src={LOGO} alt="Brand Station Logo" />
        </div>
        <HeaderMainLinks className={styles.header__main_nav_links} />
        <ul className={styles.header__main_custom_links}>
          <li className={styles.header__main_search_box}>
            <input
              type="text"
              placeholder="Search.."
              name="search"
              className={styles.header__main_search_input}
            />
            <a href="/" className={styles.header__main_search_icon}>
              <AiOutlineSearch />
            </a>
          </li>
          <li>
            <a href="/">
              <AiOutlineUser />
            </a>
          </li>
          <li>
            <a href="/">
              <AiOutlineHeart />
            </a>
          </li>
          <li>
            <a href="/">
              <AiOutlineShoppingCart />
            </a>
          </li>
        </ul>
      </MainCard>
    </div>
  );
};

export default HeaderMain;
