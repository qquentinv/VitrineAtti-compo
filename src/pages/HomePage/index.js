import React from "react";
import Puzz from "./../../image/puzzle2.png";
import { Block, Comment } from "./style";
import { Container } from "atti-components";

class HomePage extends React.Component {
  constructor(props) {
    super(props);
    this.codeUse1 = "import { Button } from 'atti-components'";
    this.codeUse2 = "import { Button } from 'atti-components/native'";
  }
  render() {
    return (
      <Container>
        <div
          style={{
            display: "flex",
            alignItems: "center"
          }}
        >
          <div style={{ margin: "10px" }}>
            <h1
              style={{
                color: "#f29400"
              }}
            >
              Atti-components
            </h1>
            <br />
            <h3>Create interfaces with React component library</h3>
            <br />
            <p>
              This library focuses on component customization and accessibility.
              It also aims to make the code shareable between the web version
              and the mobile (native) version of the interface to accelerate
              development time.
            </p>
          </div>
          <div
            style={{
              flexShrink: 0,
              margin: "10px"
            }}
          >
            <img src={Puzz} alt="puzz" />
          </div>
        </div>
        <div
          style={{
            display: "flex"
          }}
        >
          <Block>
            <h3>Installation</h3>
            <h5>Normal installation</h5>
            <p>
              To use this library, simply add it as a dependency to your yarn or
              npm project by running the command:
            </p>
            <code>
              <span>npm install --save atti-components</span>
              <br />
              <Comment>{"// Or"}</Comment>
              <br />
              <span>yarn add atti-components</span>
            </code>
            <br />
            <br />
            <h5>Unstable Installation</h5>
            <p>
              Sometimes, we will provide a prerelease version to enable everyone
              to test upcoming features. To use the lastest prerelease, simply
              run:
            </p>
            <code>
              <span>npm install --save atti-components@next</span>
              <br />
              <Comment>{"// Or"}</Comment>
              <br />
              <span>yarn add atti-components@next</span>
            </code>
            <br />
            <br />
          </Block>
          <Block>
            <h3>Usage</h3>
            <p>
              Then, add the right import depending if you want to use Native or
              Web components:
            </p>
            <div>
              <code className="code javascript">
                <Comment>{"// Import Web components"}</Comment>
                <br />
                <span>{this.codeUse1}</span>
                <br />
                <br />
                <Comment>{"// Import Native components"}</Comment>
                <br />
                <span>{this.codeUse2}</span>
                <br />
              </code>
            </div>
          </Block>
        </div>
      </Container>
    );
  }
}

export default HomePage;
