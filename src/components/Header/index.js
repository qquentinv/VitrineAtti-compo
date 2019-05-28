import React from "react";
import { Button, Logo, Input } from "./style";
import Menu from "./../Menu";
import GH1 from "./../../image/GitHub-Mark-Light-32px.png";
import GH2 from "./../../image/GitHub-Mark-32px.png";

class Header extends React.Component {
  render() {
    return (
      <header className="container-fluid">
        <div
          className="row"
          style={{
            backgroundColor: "#f29400",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            marginBottom: "100px"
          }}
        >
          <Menu />
          <Logo>
            <h1>Atti-components</h1>
          </Logo>
          <div style={{ display: "flex", alignItems: "center" }}>
            <Input type="text" placeholder="Search" />

            <Button
              onClick={() => {
                window.location.href =
                  "https://github.com/attineos/atti-components";
              }}
            >
              <img src={GH1} alt="GitHub-img1" className="white" />
              <img src={GH2} alt="GitHub-img2" className="black" />
              &nbsp; GitHub
            </Button>
          </div>
        </div>
      </header>
    );
  }
}

export default Header;
