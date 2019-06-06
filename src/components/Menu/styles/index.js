import styled from "styled-components";
import { Link } from "react-router-dom";

export const MenuContainer = styled("div")`
  display: flex;
  align-items: center;
  color: white;
  height: 100%;
  width: auto;
`;

export const MenuNavMobile = styled("nav")`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100%;
  padding: 20px;
  z-index: 3;

  @media only screen and (max-width: ${({ theme }) =>
      theme.breakpoints.mobileMax}) {
    padding: 0;
    margin-left: 10px;
  }
`;

export const MenuOpenerLine = styled("div")`
  position: absolute;
  height: 5px;
  width: 35px;
  background-color: white;
  transition: transform 0.2s ease;
`;

export const MenuOpenerContainer = styled.span`
  position: relative;
  display: block;
  width: 35px;
  height: 30px;
  z-index: 30;
  cursor: pointer;

  ${MenuOpenerLine} {
    &:nth-child(2) {
      margin-top: 10px;
    }

    &:nth-child(3) {
      margin-top: 20px;
    }
  }

  transition: all 0.4s;
`;

export const BackgroundFade = styled("div")`
  position: fixed;
  height: 100%;
  width: 100%;
  background-color: rgba(7, 7, 7, 0.7);
  top: 0px;
  left: ${({ opened }) => (opened ? "0" : "-100vw")};
  visibility: ${({ opened }) => (opened ? "visible" : "hidden")};
  opacity: ${({ opened }) => (opened ? "1" : "0")};
  transition: ${({ opened }) =>
    opened ? "opacity 0.3s linear" : "visibility 0s 0.3s, opacity 0.3s linear"};
  overflow: hidden;
`;

export const SideMenu = styled("div")`
  position: fixed;
  height: 100%;
  width: 250px;
  left: ${({ opened }) => (opened ? "0" : "-250px")};
  background-color: #f29400;
  top: 0px;
  transition: ease 0.3s all;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  max-height: 100%;
  overflow: hidden;
  z-index: 999;

  @media only screen and (max-width: ${({ theme }) =>
      theme.breakpoints.mobileMax}) {
    width: 165px;
  }
`;

export const MenuFooter = styled.div`
  display: flex;
  position: absolute;
  flex-wrap: wrap;
  left: 0px;
  bottom: 0px;
  justify-content: center;
  width: 100%;
  background-color: #f29400;

  > a {
    width: 100%;
  }

  > hr {
    margin-top: 0;
  }
`;

export const MenuList = styled("div")`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-height: 75%;
  height: 75%;
  width: 100%;
  padding-bottom: 10px;
`;

export const MenuSubLink = styled(Link)`
  color: white;
  display: flex;
  cursor: pointer;
  height: 100%;
  width: 100%;
  flex-direction: column;
  justify-content: center;
  margin: 15px;
  padding: 4px 4px;
  border: none;
  font-size: 15px;
  font-weight: bold;
  word-break: break-all;
  :hover {
    color: white;
  }
`;

export const MenuLink = styled(Link)`
  display: flex;
  position: relative;
  flex-direction: column;
  height: auto;
  width: 100%;
  color: white;
  text-align: center;
  font-weight: bold;
  margin: 5px;
  padding: 5px;
  font-size: 20px;
  text-decoration: none;
  cursor: pointer;
  &:hover,
  &.active {
    background-color: white;
    color: #f29400;
    text-decoration: none;
  }
`;
