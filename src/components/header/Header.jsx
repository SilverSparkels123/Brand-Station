import React, { useContext, useState } from "react";
import HeaderMain from "./HeaderMain";
import HeaderMiddle from "./HeaderMiddle";
import HeaderTop from "./HeaderTop";
import styles from "./Header.module.css";
import HeaderMainMobMenu from "./HeaderMainMobMenu";
import MenuBtnContext from "../contextStore/MenuBtnContext";

const Header = () => {
  const btnAction = useContext(MenuBtnContext);
  const btnIsClicked = btnAction.btnClicked;
  const [fix, setFix] = useState(false);

  const setFixed = () => {
    if (window.scrollY >= 300) {
      setFix(true);
    } else {
      setFix(false);
    }
  };

  window.addEventListener("scroll", setFixed);

  return (
    <div
      className={!fix ? styles.header__section : styles.header__section_fixed}
    >
      <HeaderTop
        className={
          !fix
            ? styles.header__section_middle
            : styles.header__section_middle_fixed
        }
      />
      <HeaderMiddle />
      <HeaderMain />
      {btnIsClicked && <HeaderMainMobMenu />}
    </div>
  );
};

export default Header;
