import React from "react";
import Imgatti from "../../image/puzzle.png";
import { Case } from "./style";

class Showcase extends React.Component {
  render() {
    return (
      <div>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <h1 style={{ color: "#f29400" }}>Showcase</h1>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            width: "100%",
            marginTop: "10px",
            flexDirection: "row"
          }}
        >
          <Case>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center"
              }}
            >
              <img src={Imgatti} alt="atti-compo" />
              <div>
                <h1>Explain</h1>
              </div>
            </div>
          </Case>
          <Case>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center"
              }}
            >
              <img src={Imgatti} alt="atti-compo" />
              <div>
                <h1>Explain</h1>
              </div>
            </div>
          </Case>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            width: "100%",
            marginTop: "10px",
            flexDirection: "row"
          }}
        >
          <Case>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center"
              }}
            >
              <img src={Imgatti} alt="atti-compo" />
              <div>
                <h1>Explain</h1>
              </div>
            </div>
          </Case>
          <Case>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center"
              }}
            >
              <img src={Imgatti} alt="atti-compo" />
              <div>
                <h1>Explain</h1>
              </div>
            </div>
          </Case>
        </div>
      </div>
    );
  }
}

export default Showcase;
