import React from "react";
import { Content, Li } from "./style";
import { Container, Header3 } from "atti-components";

class Tutorials extends React.Component {
  render() {
    return (
      <Content>
        <Container>
          <h1
            style={{
              color: "#f29400",
              marginBottom: "50px"
            }}
          >
            Tutorials
          </h1>
          <div style={{ marginLeft: "150px" }}>
            <Header3>
              <ul>
                <Li>Latius Sericus palaestrita vincula ea</Li>
                <Li>Latius multitudine repellere educata superabatur</Li>
                <Li>Per per constrinxerunt membrorum corpora</Li>
                <Li>Enim Ad difficiles istum honoribus</Li>
                <Li>Per castra Galli praepotens perferens</Li>
              </ul>
            </Header3>
          </div>
        </Container>
      </Content>
    );
  }
}

export default Tutorials;
