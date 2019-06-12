import React from "react";
import Attineos from "../../image/attineos1.png";
import CodeTrotteur from "../../image/code-trotteur1.png";
import Attisport from "../../image/attisport1.png";
import Atrakeur from "../../image/atrakeur1.png";
import Case from "../../components/Case";
import { Ligne, Content, Title } from "./style";
import { Container } from "atti-components";

class Showcase extends React.Component {
  render() {
    return (
      <Content>
        <Container>
          <Title>Showcase</Title>
          <Ligne>
            <Case
              title="Attineos"
              desc="Attineos is an IT service company unlike any other."
              link="/showcase/attineos"
              image={Attineos}
            />
            <Case
              title="Attisport"
              desc="Attisport is a betting website created by Attineos for them."
              link="/showcase/attisport"
              image={Attisport}
            />
            <Case
              title="Atrakeur"
              desc="Waiting for description"
              link="/showcase/atrakeur"
              image={Atrakeur}
            />
            <Case
              title="Code-trotteur"
              desc="Waiting for description"
              link="/showcase/code-trotteur"
              image={CodeTrotteur}
            />
          </Ligne>
        </Container>
      </Content>
    );
  }
}

export default Showcase;
