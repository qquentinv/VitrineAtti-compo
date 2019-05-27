import React, { Component } from "react";
//import { StyledLine } from "components/Styles";
import {
  BackgroundFade,
  MenuFooter,
  MenuLink,
  MenuList,
  MenuNavMobile,
  MenuOpenerContainer,
  MenuOpenerLine,
  MenuSubLink,
  SideMenu
} from "./styles/MenuMobile";

class MenuMobile extends Component {
  state = {
    isMenuOpen: false
  };

  handleClick = () => {
    this.setState({ isMenuOpen: !this.state.isMenuOpen });
  };

  openEventList = () => {
    const { isEventListOpen } = this.state;
    this.setState({ isEventListOpen: !isEventListOpen });
  };

  render() {
    const { isMenuOpen } = this.state;

    const fadeEffect = !isMenuOpen ? 0 : 1;
    const menuPosition = !isMenuOpen ? -250 : 0;

    return (
      <MenuNavMobile>
        <MenuOpenerContainer onClick={this.handleClick.bind(this)}>
          <MenuOpenerLine />
          <MenuOpenerLine />
          <MenuOpenerLine />
        </MenuOpenerContainer>

        <BackgroundFade
          fade={fadeEffect}
          opened={isMenuOpen}
          onClick={this.handleClick.bind(this)}
        />

        <SideMenu opened={isMenuOpen} position={menuPosition + "px"}>
          <MenuList>
            <MenuLink onClick={this.handleClick.bind(this)} to={`/`}>
              Home Page
            </MenuLink>

            <MenuLink onClick={this.handleClick.bind(this)} to="/showcase">
              Showcase
            </MenuLink>

            <MenuLink onClick={this.handleClick.bind(this)} to={`/`}>
              ...
            </MenuLink>
          </MenuList>

          <MenuFooter onClick={this.handleClick.bind(this)}>
            <MenuSubLink to="/about" align="right">
              About
            </MenuSubLink>
          </MenuFooter>
        </SideMenu>
      </MenuNavMobile>
    );
  }
}

export default MenuMobile;
