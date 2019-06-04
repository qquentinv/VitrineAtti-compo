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
import { BrowserRouter as Router, Route } from "react-router-dom";

class App extends React.Component {
  render() {
    return (
      
      <ThemeProvider theme={defaultTheme}>
        <Router>
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
            <Route exact path="/tutorials" component={Tutorials} />
            <Route exact path="/tutorials/explain" component={TutoContent} />
            <Route exact path="/showcase" component={Showcase} />
            <Route exact path="/showcase/atti-compo" component={Showcases} />
            <Route path="/about" component={About} />
            <Footer />
          </div>
        </Router>
      </ThemeProvider>
    );
  }
}

export default App;
