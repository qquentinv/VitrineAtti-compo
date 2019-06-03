import React from "react";
import Imgatti from "../../image/puzzle.png";
import { Case, Button, Ligne, Content, Title } from "./style";
import { Container, Text } from "atti-components";

class Showcase extends React.Component {
  render() {
    return (
      <Content>
        <Container>
          <Title>Showcase</Title>
          <Ligne>
            <Case>
              <img
                onClick={() => {
                  window.location.href = "/showcase/atti-compo";
                }}
                src={Imgatti}
                alt="atti-compo"
              />
              <br />
              <div>
                <h1
                  onClick={() => {
                    window.location.href = "/showcase/atti-compo";
                  }}
                >
                  Explain
                </h1>
              </div>
              <Text>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
                id pretium ipsum.
              </Text>
              <Button
                onClick={() => {
                  window.location.href = "/showcase/atti-compo";
                }}
              >
                En savoir +{" "}
              </Button>
            </Case>
            <Case>
              <img
                onClick={() => {
                  window.location.href = "/showcase/atti-compo";
                }}
                src={Imgatti}
                alt="atti-compo"
              />
              <br />
              <div>
                <h1
                  onClick={() => {
                    window.location.href = "/showcase/atti-compo";
                  }}
                >
                  Explain
                </h1>
              </div>
              <Text>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
                id pretium ipsum.
              </Text>
              <Button
                onClick={() => {
                  window.location.href = "/showcase/atti-compo";
                }}
              >
                En savoir +{" "}
              </Button>
            </Case>
            <Case>
              <img
                onClick={() => {
                  window.location.href = "/showcase/atti-compo";
                }}
                src={Imgatti}
                alt="atti-compo"
              />
              <br />
              <div>
                <h1
                  onClick={() => {
                    window.location.href = "/showcase/atti-compo";
                  }}
                >
                  Explain
                </h1>
              </div>
              <Text>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
                id pretium ipsum.
              </Text>
              <Button
                onClick={() => {
                  window.location.href = "/showcase/atti-compo";
                }}
              >
                En savoir +{" "}
              </Button>
            </Case>
            <Case>
              <img
                onClick={() => {
                  window.location.href = "/showcase/atti-compo";
                }}
                src={Imgatti}
                alt="atti-compo"
              />
              <br />
              <div>
                <h1
                  onClick={() => {
                    window.location.href = "/showcase/atti-compo";
                  }}
                >
                  Explain
                </h1>
              </div>
              <Text>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
                id pretium ipsum.
              </Text>
              <Button
                onClick={() => {
                  window.location.href = "/showcase/atti-compo";
                }}
              >
                En savoir +{" "}
              </Button>
            </Case>
          </Ligne>
        </Container>
      </Content>
    );
  }
}

export default Showcase;
