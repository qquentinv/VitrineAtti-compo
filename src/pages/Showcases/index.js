import React from "react";
import Imge from "../../image/atti-compo.png";
import {
  Img,
  Background,
  Ecrit,
  Content,
  StyledImage,
  Title,
  Button,
  StyledBigText
} from "./style";
import { Container,  } from "atti-components";

class Showcases extends React.Component {
  render() {
    return (
      <Content>
        <Container>
          <StyledImage>
            <Img src={Imge} alt="puzz" />
            <Background
              onClick={() => {
                window.location.href = "https://atti-components.netlify.com/";
              }}
            >
              <Ecrit>Allez sur la page</Ecrit>
            </Background>
          </StyledImage>
          <Title>Atti-compo</Title>
          <StyledBigText>
            Epigonum nec ducitur industria si Montius sed orator res nec et et
            insimulasset Epigonum ostendens qui quaestor et philosophus sed
            quaestor fabricarum intepesceret orator ducitur qui Eusebius
            tribunos promittentes agitari Lycia philosophus quaerebatur inter
            armorum manus nequid novas tribunos ducitur manus sed nec ab
            Eusebium inter philosophus spiritum dignitatem increpabat.
          </StyledBigText>
          <div
            style={{
              display: "flex",
              justifyContent: "flex-end",
              margin: "15px"
            }}
          >
            <Button
              onClick={() => {
                window.location.href = "https://atti-components.netlify.com/";
              }}
            >
              View site
            </Button>
          </div>
        </Container>
      </Content>
    );
  }
}

export default Showcases;
