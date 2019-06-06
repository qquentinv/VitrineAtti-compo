import React from "react";
import { StyledCase, Button, Img } from "./style";
import { Text } from "atti-components";

class Case extends React.Component {
  render() {
    const { title, desc, link, image } = this.props;
    return (
      <StyledCase>
        <Img
          onClick={() => {
            window.location.href = link;
          }}
          src={image}
          alt={title}
          style={{ cursor: "pointer" }}
        />
        <br />
        <div>
          <h1
            onClick={() => {
              window.location.href = link;
            }}
            style={{ cursor: "pointer" }}
          >
            {title}
          </h1>
        </div>
        <Text>{desc}</Text>
        <Button
          onClick={() => {
            window.location.href = link;
          }}
          style={{ cursor: "pointer" }}
        >
          En savoir +
        </Button>
      </StyledCase>
    );
  }
}

export default Case;
