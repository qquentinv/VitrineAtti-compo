import React from "react";
import {
  Img,
  Background,
  Ecrit,
  StyledImage,
  StyledLink,
  Title,
  StyledBigText,
  StyledBreadcrumb,
  customTheme
} from "./style";
import { ThemeProvider } from "atti-components";

class Vitrine extends React.Component {
  render() {
    const { image, link, title, desc } = this.props;
    return (
      <div>
        <ThemeProvider otherTheme={customTheme}>
          <StyledBreadcrumb
            elements={[
              { name: "Home", url: "/" },
              { name: "Showcase", url: "/showcase" },
              { name: title }
            ]}
            separator={">"}
          />
        </ThemeProvider>
        <StyledImage>
          <Img src={image} alt={title} />
          <Background
            onClick={() => {
              window.location.href = link;
            }}
          >
            <Ecrit>Go on the page !</Ecrit>
          </Background>
        </StyledImage>
        <Title>{title}</Title>
        <StyledBigText>{desc}</StyledBigText>
        <div>
          <StyledLink href={link} target="_blank">
            {link}
          </StyledLink>
        </div>
      </div>
    );
  }
}

export default Vitrine;
