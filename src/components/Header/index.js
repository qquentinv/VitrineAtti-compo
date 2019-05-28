import React from "react";
import { Button, Logo, Input } from "./style";
import Menu from "./../Menu";
import GH from "./../../image/GitHub-Mark-Light-32px.png";

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
              <img src={GH} alt="GitHub-img" />
              &nbsp; GitHub
            </Button>
          </div>
        </div>
      </header>
    );
  }
}

export default Header;
