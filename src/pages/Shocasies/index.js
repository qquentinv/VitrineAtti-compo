import React from "react";
import Img from "../../image/atti-compo.png";

class Showcasies extends React.Component {
  render() {
    return (
      <div>
        <div
          style={{
            display: "flex",
            justifyContent: "center"
          }}
        >
          <img src={Img} alt="puzz" />
        </div>
        <br />
        <br />
        <div style={{ display: "flex", justifyContent: "center" }}>
          <h1 style={{ color: "#f29400" }}>Atti-compo</h1>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-around"
          }}
        >
          <div>
            <p>
              Epigonum nec ducitur industria si Montius sed orator res nec et et
              insimulasset Epigonum ostendens qui quaestor et philosophus sed
              quaestor fabricarum intepesceret orator ducitur qui Eusebius
              tribunos promittentes agitari Lycia philosophus quaerebatur inter
              armorum manus nequid novas tribunos ducitur manus sed nec ab
              Eusebium inter philosophus spiritum dignitatem increpabat.
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Showcasies;
