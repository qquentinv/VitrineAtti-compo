import React from "react";
import Showcase from "./pages/Showcase/";
import HomePage from "./pages/HomePage/";
import Tutorials from "./pages/Tutorials/";
import Header from "./components/Header/";
import Footer from "./components/Footer/";
import About from "./pages/About/";
import Showcasies from "./pages/Shocasies";
import Tuto_Content from "./pages/Tuto_Content";
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
            <Route path="/tutorials/explain" component={Tuto_Content} />
            <Route exact path="/showcase" component={Showcase} />
            <Route path="/showcase/atti-compo" component={Showcasies} />
            <Route path="/about" component={About} />
            <Footer />
          </div>
        </Router>
      </ThemeProvider>
    );
  }
}

export default App;
