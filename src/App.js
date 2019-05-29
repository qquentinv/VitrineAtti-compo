import React from "react";
import Showcase from "./pages/Showcase/";
import HomePage from "./pages/HomePage/";
import Tutorials from "./pages/Tutorials/";
import Header from "./components/Header/";
import Footer from "./components/Footer/";
import About from "./pages/About/";
import Showcasies from "./pages/Shocasies";
import { BrowserRouter as Router, Route } from "react-router-dom";

class App extends React.Component {
  render() {
    return (
      <Router>
        <div
          style={{
            backgroundColor: "white",
            position: "relative",
            minHeight: "100vh",
            minWidth: "75vw",
            paddingBottom: "100px"
          }}
        >
          <Header />
          <Route exact path="/" component={HomePage} />
          <Route path="/tutorials" component={Tutorials} />
          <Route exact path="/showcase" component={Showcase} />
          <Route exact path="/showcase/atti-compo" component={Showcasies} />
          <Route path="/about" component={About} />

          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
