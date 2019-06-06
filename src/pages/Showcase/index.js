import React from "react";
import Attineos from "../../image/attineos1.png";
import CodeTrotteur from "../../image/code-trotteur1.png";
import Attisport from "../../image/attisport1.png";
import Atrakeur from "../../image/atrakeur1.png";
import Case from "../../components/Case"

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
              desc="dfshvgidqsfjgndpqsnjgfpodsgnfdosnfgdfjisn"
              link="/showcase/attineos"
              image={Attineos}
            />
            <Case
              title="Attisport"
              desc="dfshvgidqsfjgndpqsnjgfpodsgnfdosnfgdfjisn"
              link="/showcase/attisport"
              image={Attisport}
            />
            <Case
              title="Atrakeur"
              desc="dfshvgidqsfjgndpqsnjgfpodsgnfdosnfgdfjisn"
              link="/showcase/atrakeur"
              image={Atrakeur}
            />
            <Case
              title="Code-trotteur"
              desc="dfshvgidqsfjgndpqsnjgfpodsgnfdosnfgdfjisn"
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
