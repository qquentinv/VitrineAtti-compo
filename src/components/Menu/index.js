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
  MenuContainer,
  MenuLinkAtti
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
    console.log(window.location.href.includes("/tutorials"));
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
              <MenuLink
                onClick={this.handleClick.bind(this)}
                to="/"
                className={window.location.pathname === "/" && "active"}
              >
                Home Page
              </MenuLink>
              <MenuLinkAtti
                elements={[
                  {
                    name: "Documentation",
                    url: "/docs/"
                  }
                ]}
                isResponsive={false}
              />
              <MenuLink
                onClick={this.handleClick.bind(this)}
                to="/tutorials"
                className={
                  window.location.href.includes("/tutorials") && "active"
                }
              >
                Tutorials
              </MenuLink>
              <MenuLink
                onClick={this.handleClick.bind(this)}
                to="/showcase"
                className={
                  window.location.href.includes("/showcase") && "active"
                }
              >
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
