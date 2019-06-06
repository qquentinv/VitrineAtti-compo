import React from "react";
import { StyledCase, Button, Img, StyledText } from "./style";

class Case extends React.Component {
  render() {
    const { title, desc, image } = this.props;
    const link = `/showcase/${title}`;
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
        <StyledText>{desc}</StyledText>
        <Button
          onClick={() => {
            window.location.href = link;
          }}
          style={{ cursor: "pointer" }}
        >
          More information
        </Button>
      </StyledCase>
    );
  }
}

export default Case;
