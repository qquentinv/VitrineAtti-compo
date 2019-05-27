import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Puzz from "../../image/puzzle1.png";
import { Case } from "./style";

class Showcase extends React.Component {
  render() {
    return (
      <div
        id="showcase"
        style={{
          backgroundColor: "white",
          position: "relative",
          minHeight: "100vh",
          minWidth: "75vw",
          paddingBottom: "10px"
        }}
      >
        <Header />
        <h1 style={{ marginLeft: "200px", color: "#f29400" }}>Showcase</h1>
        <Case>
          <div style={{ borderBottom: "2px solid lightgrey" }}>
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
                marginRight: "200px"
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
        <Footer />
      </div>
    );
  }
}

export default Showcase;
