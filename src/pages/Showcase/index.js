import React from "react";
import Imgatti from "../../image/puzzle.png";
import { Case, Button, Ligne, CaseAlign } from "./style";
import { Container } from "atti-components";

class Showcase extends React.Component {
  render() {
    return (
      <Container style={{ backgroundColor: "rgb(247,247,247)" }}>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <h1 style={{ color: "#f29400" }}>Showcase</h1>
        </div>
        <Ligne>
          <Case>
            <CaseAlign>
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
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
                id pretium ipsum.
              </p>
              <Button
                onClick={() => {
                  window.location.href = "/showcase/atti-compo";
                }}
              >
                En savoir +{" "}
              </Button>
            </CaseAlign>
          </Case>
          <Case>
            <CaseAlign>
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
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
                id pretium ipsum.
              </p>
              <Button
                onClick={() => {
                  window.location.href = "/showcase/atti-compo";
                }}
              >
                En savoir +{" "}
              </Button>
            </CaseAlign>
          </Case>
        </Ligne>
        <Ligne>
          <Case>
            <CaseAlign>
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
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
                id pretium ipsum.
              </p>
              <Button
                onClick={() => {
                  window.location.href = "/showcase/atti-compo";
                }}
              >
                En savoir +{" "}
              </Button>
            </CaseAlign>
          </Case>
          <Case>
            <CaseAlign>
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
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
                id pretium ipsum.
              </p>
              <Button
                onClick={() => {
                  window.location.href = "/showcase/atti-compo";
                }}
              >
                En savoir +{" "}
              </Button>
            </CaseAlign>
          </Case>
        </Ligne>
      </Container>
    );
  }
}

export default Showcase;
