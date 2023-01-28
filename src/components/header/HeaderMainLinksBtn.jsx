import React, { useContext } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import MenuBtnContext from "../contextStore/MenuBtnContext";

const HeaderMainLinksBtn = (props) => {
  const btnAction = useContext(MenuBtnContext);
  const menuBtnOpenClickHandler = () => {
    btnAction.onOpenBtn();
  };

  const menuBtnCloseClickHandler = () => {
    btnAction.onCloseBtn();
  };

  const menuBtnClicked = btnAction.btnClicked;

  return (
    <div className={props.className}>
      {!menuBtnClicked ? (
        <AiOutlineMenu onClick={menuBtnOpenClickHandler} />
      ) : (
        <AiOutlineClose onClick={menuBtnCloseClickHandler} />
      )}
    </div>
  );
};

export default HeaderMainLinksBtn;
