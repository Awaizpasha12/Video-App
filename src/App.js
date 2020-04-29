import React from "react";
import "./App.css";
import "video-react/dist/video-react.css";
import Container from "@material-ui/core/Container";
import Header from "./components/layout/Header";
import About from "./components/pages/About";
import NotFound from "./components/pages/NotFound";
import Collection from "./components/videos/Collection";
import MyVideos from "./components/videos/MyVideos";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
      <Header />
      <Container maxWidth="lg">
        <Switch>
          <Route exact path="/" component={Collection} />
          <Route exact path="/myvideos" component={MyVideos} />
          <Route exact path="/about" component={About} />
          <Route component={NotFound} />
        </Switch>
      </Container>
    </Router>
  );
}

export default App;
