import React from "react";
import {
  Img,
  Background,
  Ecrit,
  StyledImage,
  StyledLink,
  Title,
  StyledBigText,
  StyledBreadcrumb
} from "./style";

class Vitrine extends React.Component {
  render() {
    const { image, link, title, desc } = this.props;
    return (
      <div>
        <StyledBreadcrumb
          elements={[
            { name: "Home", url: "/" },
            { name: "Showcase", url: "/showcase" },
            { name: title }
          ]}
          separator={">"}
        />
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
