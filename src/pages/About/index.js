import React from "react";
import { Content, StyledHeader2 } from "./style";
import { Container } from "atti-components";

class About extends React.Component {
  render() {
    return (
      <Content>
        <Container>
          <StyledHeader2>This page is about Atti-Components</StyledHeader2>
        </Container>
      </Content>
    );
  }
}
export default About;
