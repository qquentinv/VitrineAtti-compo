import React from "react";

import MenuMobile from "./MenuMobile";

import { MenuContainer } from "./styles";

const Menu = props => {
  return (
    <MenuContainer>
      <MenuMobile />
    </MenuContainer>
  );
};

export default Menu;
