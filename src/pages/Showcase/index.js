import React from "react";
import Imgatti from "../../image/puzzle.png";
import { Case, Button } from "./style";

class Showcase extends React.Component {
  render() {
    return (
      <div>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <h1 style={{ color: "#f29400" }}>Showcase</h1>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            width: "100%",
            marginTop: "10px",
            flexDirection: "row"
          }}
        >
          <Case>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center"
              }}
            >
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
            </div>
          </Case>
          <Case>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center"
              }}
            >
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
            </div>
          </Case>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            width: "100%",
            marginTop: "10px",
            flexDirection: "row"
          }}
        >
          <Case>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center"
              }}
            >
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
            </div>
          </Case>
          <Case>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center"
              }}
            >
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
            </div>
          </Case>
        </div>
      </div>
    );
  }
}

export default Showcase;
