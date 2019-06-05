import React from "react";
import { Content, Li, Liste, Title } from "./style";
import { Container} from "atti-components";

class Tutorials extends React.Component {
  render() {
    return (
      <Content>
        <Container>
          <Title>Tutorials</Title>
          <Liste>  
              <ul>
                <Li
                  onClick={() => {
                    window.location.href = "/tutorials/explain";
                  }}
                >
                  Latius Sericus palaestrita vincula ea
                </Li>
                <Li
                  onClick={() => {
                    window.location.href = "/tutorials/explain";
                  }}
                >
                  Latius multitudine repellere educata superabatur
                </Li>
                <Li
                  onClick={() => {
                    window.location.href = "/tutorials/explain";
                  }}
                >
                  Per per constrinxerunt membrorum corpora
                </Li>
                <Li
                  onClick={() => {
                    window.location.href = "/tutorials/explain";
                  }}
                >
                  {" "}
                  Enim Ad difficiles istum honoribus
                </Li>
                <Li
                  onClick={() => {
                    window.location.href = "/tutorials/explain";
                  }}
                >
                  Per castra Galli praepotens perferens
                </Li>
              </ul>
          </Liste>
        </Container>
      </Content>
    );
  }
}

export default Tutorials;
