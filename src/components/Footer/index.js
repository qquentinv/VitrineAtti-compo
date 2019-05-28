import React from "react";

class Footer extends React.Component {
  render() {
    return (
      <footer
        className="container-fluid"
        style={{ position: "absolute", bottom: 0 }}
      >
        <div className="row" style={{ backgroundColor: "#f29400" }}>
          <p style={{ marginLeft: "120px", padding: "17px", color: "white" }}>
            Generated with ReactJS
          </p>
        </div>
      </footer>
    );
  }
}

export default Footer;
