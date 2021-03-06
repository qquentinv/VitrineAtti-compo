import React from "react";
import { Button, Title, DivHeader, Align, Gitspan } from "./style";
import Menu from "./../Menu";
import GH1 from "./../../image/GitHub-Mark-Light-32px.png";
import GH2 from "./../../image/GitHub-Mark-32px.png";
import { history } from "../../";

class Header extends React.Component {
  render() {
    return (
      <DivHeader>
        <Align className="left">
          <Menu />
        </Align>
        <Align className="center">
          <Title
            onClick={() => {
              history.push("/");
            }}
          >
            Atti-components
          </Title>
        </Align>
        <Align className="right">
          <Button
            onClick={() => {
              window.location.href =
                "https://github.com/attineos/atti-components";
            }}
          >
            <img src={GH1} alt="GitHub-img1" className="white" />
            <img src={GH2} alt="GitHub-img2" className="black" />
            <Gitspan>GitHub</Gitspan>
          </Button>
        </Align>
      </DivHeader>
    );
  }
}

export default Header;
