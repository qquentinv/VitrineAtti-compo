import React from "react";
import Img from "../../image/atti-compo.png";
import { Image, Background, Ecrit } from "./style";
import { Container, BigText } from "atti-components";

class Showcasies extends React.Component {
  render() {
    return (
      <Container>
        <div
          style={{
            display: "flex",
            position: "relative",
            border: "1px solid lightgrey"
          }}
        >
          <Image src={Img} alt="puzz">
            <Background
              onClick={() => {
                window.location.href = "https://atti-components.netlify.com/";
              }}
            >
              <Ecrit>Allez sur la page</Ecrit>
            </Background>
          </Image>
        </div>
        <br />
        <br />
        <div style={{ display: "flex", justifyContent: "center" }}>
          <h1 style={{ color: "#f29400" }}>Atti-compo</h1>
        </div>
        <br />
        <BigText mb="s10">
          Epigonum nec ducitur industria si Montius sed orator res nec et et
          insimulasset Epigonum ostendens qui quaestor et philosophus sed
          quaestor fabricarum intepesceret orator ducitur qui Eusebius tribunos
          promittentes agitari Lycia philosophus quaerebatur inter armorum manus
          nequid novas tribunos ducitur manus sed nec ab Eusebium inter
          philosophus spiritum dignitatem increpabat.
        </BigText>
      </Container>
    );
  }
}

export default Showcasies;
