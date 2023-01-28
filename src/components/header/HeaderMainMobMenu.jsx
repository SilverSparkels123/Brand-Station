import React, { useContext } from "react";
import styles from "./HeaderMainMobMenu.module.css";
import { AiOutlineClose } from "react-icons/ai";
import HeaderMainLinks from "./HeaderMainLinks";
import HeaderMiddleLinks from "./HeaderMiddleLinks";
import SecondaryCard from "../UI/SecondaryCard";

import { BsFacebook, BsLinkedin } from "react-icons/bs";
import { AiFillInstagram } from "react-icons/ai";
import MenuBtnContext from "../contextStore/MenuBtnContext";
import LOGO from "../../assets/logo.png";

const HeaderMainMobMenu = () => {
  const btnAction = useContext(MenuBtnContext);

  const menuBtnClickHandler = () => {
    btnAction.onCloseBtn();
  };

  return (
    <SecondaryCard className={styles.header__main_mob_menu_section}>
      <div className={styles.header__main_mob_menu_header}>
        <div className={styles.header__main_mob_menu_header_logo}>
          <img src={LOGO} alt="Brand Station Logo" />
        </div>
        <AiOutlineClose
          onClick={menuBtnClickHandler}
          className={styles.header__main_mob_menu_header_close}
        />
      </div>
      <div className={styles.header__main_mob_menu_body}>
        <HeaderMainLinks className={styles.header__main_mob_menu_body_links} />
        <HeaderMiddleLinks
          className={styles.header__main_mob_menu_body_links}
        />
        <ul className={styles.header__main_mob_menu_body_imp_links}>
          <li>
            <a href="/">EOSS! GET 2 OR MORE, GET EXTRA 15% OFF!</a>
          </li>
          <li>
            <a href="/">WINTER SHOP</a>
          </li>
          <li>
            <a href="/">OUTLET</a>
          </li>
          <div className={styles.header__main_mob_menu_body_socials}>
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
                  className={styles.header__main_mob_menu_body_social_ig}
                />
              </a>
            </li>
          </div>
        </ul>
      </div>
    </SecondaryCard>
  );
};

export default HeaderMainMobMenu;
