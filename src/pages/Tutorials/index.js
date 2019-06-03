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
            </Header3>
          </div>
        </Container>
      </Content>
    );
  }
}

export default Tutorials;
