import React from "react";
import {
  Img,
  Background,
  Ecrit,
  StyledImage,
  StyledLink,
  Title,
  StyledBigText
} from "./style";

class Vitrine extends React.Component {
  render() {
    const { image, link, title, desc } = this.props;
    return (
      <div>
        <StyledImage>
          <Img src={image} alt={title} />
          <Background
            onClick={() => {
              window.location.href = link;
              window.location.target = "_blank";
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
