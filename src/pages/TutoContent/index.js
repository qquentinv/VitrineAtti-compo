import React from "react";
import { Content, StyledHeader2, StyledHeader3, StyledBigText } from "./style";
import { Container } from "atti-components";

class TutoContent extends React.Component {
  render() {
    return (
      <Content>
        <Container>
          <StyledHeader2>Overall Title</StyledHeader2>
          <StyledHeader3>Subtitle 1</StyledHeader3>
          <StyledBigText>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
            pellentesque euismod ante, vel facilisis lacus fringilla sed.
            Phasellus ut eros eu urna sagittis sollicitudin vitae quis tortor.
            Vivamus fermentum ac dui vel hendrerit. Phasellus nec urna commodo
            nisl commodo volutpat. Ut viverra tempus augue et porttitor.
            Suspendisse non tincidunt sem. Nullam nec augue urna.
          </StyledBigText>
          <StyledHeader3>Subtitle 2</StyledHeader3>
          <StyledBigText>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
            pellentesque euismod ante, vel facilisis lacus fringilla sed.
            Phasellus ut eros eu urna sagittis sollicitudin vitae quis tortor.
            Vivamus fermentum ac dui vel hendrerit. Phasellus nec urna commodo
            nisl commodo volutpat. Ut viverra tempus augue et porttitor.
            Suspendisse non tincidunt sem. Nullam nec augue urna.
          </StyledBigText>

          <StyledHeader3>Subtitle 3</StyledHeader3>
          <StyledBigText>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
            pellentesque euismod ante, vel facilisis lacus fringilla sed.
            Phasellus ut eros eu urna sagittis sollicitudin vitae quis tortor.
            Vivamus fermentum ac dui vel hendrerit. Phasellus nec urna commodo
            nisl commodo volutpat. Ut viverra tempus augue et porttitor.
            Suspendisse non tincidunt sem. Nullam nec augue urna.
          </StyledBigText>
        </Container>
      </Content>
    );
  }
}

export default TutoContent;
