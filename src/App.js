import React from "react";
import {
  Showcase,
  HomePage,
  Tutorials,
  About,
  Showcases,
  TutoContent
} from "./pages";
import { Header, Footer } from "./components";
import { ThemeProvider, defaultTheme } from "atti-components";
import { Route } from "react-router-dom";

class App extends React.Component {
  render() {
    return (
      <ThemeProvider theme={defaultTheme}>
        <div
          style={{
            backgroundColor: "white",
            position: "relative",
            minHeight: "100vh",
            minWidth: "75vw"
          }}
        >
          <Header />
          <Route exact path="/" component={HomePage} />
          <Route exact path="/docs/" />
          <Route exact path="/tutorials" component={Tutorials} />
          <Route
            exact
            path="/tutorials/:tutorialName"
            component={TutoContent}
          />
          <Route exact path="/showcase" component={Showcase} />
          <Route exact path="/showcase/:showcaseName" component={Showcases} />
          <Route path="/about" component={About} />
          <Footer />
        </div>
      </ThemeProvider>
    );
  }
}

export default App;
