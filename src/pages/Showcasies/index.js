import React from "react";
import Img from "../../image/atti-compo.png";
import { Image, Background, Ecrit, Content, StyledImage, Title } from "./style";
import { Container, BigText } from "atti-components";

class Showcasies extends React.Component {
  render() {
    return (
      <Content>
        <Container>
          <StyledImage>
            <Image src={Img} alt="puzz">
              <Background
                onClick={() => {
                  window.location.href = "https://atti-components.netlify.com/";
                }}
              >
                <Ecrit>Allez sur la page</Ecrit>
              </Background>
            </Image>
          </StyledImage>
          <Title>Atti-compo</Title>
          <BigText mb="s10">
            Epigonum nec ducitur industria si Montius sed orator res nec et et
            insimulasset Epigonum ostendens qui quaestor et philosophus sed
            quaestor fabricarum intepesceret orator ducitur qui Eusebius
            tribunos promittentes agitari Lycia philosophus quaerebatur inter
            armorum manus nequid novas tribunos ducitur manus sed nec ab
            Eusebium inter philosophus spiritum dignitatem increpabat.
          </BigText>
        </Container>
      </Content>
    );
  }
}

export default Showcasies;
