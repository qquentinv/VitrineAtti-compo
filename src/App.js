import React from "react";
import Showcase from "./pages";
import HomePage from "./pages/HomePage/";
import Header from "./components/Header/";
import Footer from "./components/Footer/";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

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
          <Route path="/showcase" component={Showcase} />
          <Link to="/">Home Page</Link>
          <br />
          <Link to="/showcase">Showcase</Link>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
