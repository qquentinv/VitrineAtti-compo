import React from "react";
import Puzz from "../../image/puzzle1.png";
import { Case } from "./style";

class Showcase extends React.Component {
  render() {
    return (
      <div>
        <h1 style={{ marginLeft: "200px", color: "#f29400" }}>Showcase</h1>
        <Case>
          <div>
            <div
              style={{
                display: "flex",
                justifyContent: "center"
              }}
            >
              <h1 style={{ textAlign: "center" }}>Explain</h1>
            </div>
            <br />
            <div
              style={{
                justifyContent: "center",
                marginLeft: "200px",
                marginRight: "200px",
                borderBottom: "1px solid lightgrey"
              }}
            >
              <p>
                Impedita tempestate annonae coalito et more praetorio dignitates
                ipse ut et ea sit ipse atque causam ea annonae alioqui quam
                exagitabat alioqui in ad feritas compellebatur dignitates ipse
                ad ad.Pergunt ita haec cavatis offertur tutius manibus tamen
                sunt usque quidam ad nobilium Spoletium tutius.
              </p>
            </div>
            <br />
          </div>
          <br />
          <br />
          <div
            style={{
              display: "flex",
              justifyContent: "center"
            }}
          >
            <img src={Puzz} alt="puzz" />
          </div>
        </Case>
      </div>
    );
  }
}

export default Showcase;
