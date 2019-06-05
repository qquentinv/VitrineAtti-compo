import React, { Component } from "react";

import {
  BackgroundFade,
  MenuFooter,
  MenuLink,
  MenuList,
  MenuNavMobile,
  MenuOpenerContainer,
  MenuOpenerLine,
  MenuSubLink,
  SideMenu,
  MenuContainer
} from "./styles";

class Menu extends Component {
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

    return (
      <MenuContainer>
      <MenuNavMobile>
        <MenuOpenerContainer onClick={this.handleClick.bind(this)}>
          <MenuOpenerLine />
          <MenuOpenerLine />
          <MenuOpenerLine />
        </MenuOpenerContainer>

        <BackgroundFade
          opened={isMenuOpen}
          onClick={this.handleClick.bind(this)}
        />

        <SideMenu opened={isMenuOpen}>
          <MenuList>
            <MenuLink onClick={this.handleClick.bind(this)} to="/">
              Home Page
            </MenuLink>
            <MenuLink onClick={this.handleClick.bind(this)} to="/tutorials">
              Tutorials
            </MenuLink>
            <MenuLink onClick={this.handleClick.bind(this)} to="/showcase">
              Showcase
            </MenuLink>
          </MenuList>

          <MenuFooter onClick={this.handleClick.bind(this)}>
            <MenuSubLink to="/about" align="right">
              About
            </MenuSubLink>
          </MenuFooter>
        </SideMenu>
      </MenuNavMobile>
      </MenuContainer>
    );
  }
}

export default Menu;

