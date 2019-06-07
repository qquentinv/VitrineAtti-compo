import React from "react";
import { Content, Title, Liste } from "./style";
import { Container } from "atti-components";
import LiPageTuto from "../../components/LiPageTuto";

class Tutorials extends React.Component {
  render() {
    return (
      <Content>
        <Container>
          <Title>Tutorials</Title>
          <Liste>
            <ul>
              <LiPageTuto
                libelle="Aerumnis medetur non adstantem rectore"
                url="tuto1"
              />
              <LiPageTuto
                libelle="Magna inter manus fabricarum Lycia"
                url="tuto2"
              />
              <LiPageTuto
                libelle="Quemquam ullo nullus homines enim"
                url="tuto3"
              />
              <LiPageTuto
                libelle="Puta ignorantes annuos indumentorum ignorantes"
                url="tuto4"
              />
              <LiPageTuto
                libelle="Amplificatis matris rabie rabie efferebantur"
                url="tuto5"
              />
            </ul>
          </Liste>
        </Container>
      </Content>
    );
  }
}

export default Tutorials;
