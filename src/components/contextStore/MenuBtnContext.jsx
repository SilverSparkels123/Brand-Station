import React, { useState } from "react";

const MenuBtnContext = React.createContext({
  btnClicked: false,
  onOpenBtn: () => {},
  onCloseBtn: () => {},
});

export const MenuBtnContextProvider = (props) => {
  const [isClicked, setIsClicked] = useState(false);

  const onOpenBtnClickHandler = () => {
    setIsClicked((prevState) => !prevState);
  };

  const onCloseBtnClickHandler = () => {
    setIsClicked((prevState) => !prevState);
  };

  return (
    <MenuBtnContext.Provider
      value={{
        btnClicked: isClicked,
        onOpenBtn: onOpenBtnClickHandler,
        onCloseBtn: onCloseBtnClickHandler,
      }}
    >
      {props.children}
    </MenuBtnContext.Provider>
  );
};

export default MenuBtnContext;
