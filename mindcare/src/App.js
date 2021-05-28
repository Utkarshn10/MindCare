import logo from "./logo.svg";
import "./App.css";
import {HashRouter as Router, Switch, Route} from "react-router-dom";
import FirstTest from "../src/Components/Assessment/src/index-assessment";
import SelfTrack from "../src/Components/Self Tracking/welcome";
function App() {
  return (
    <div>
      <Router>
        <Route exact path="/assessment" component={FirstTest}></Route>
        <Route exact path="/selfTracking" component={SelfTrack}></Route>
      </Router>
    </div>
  );
}

export default App;
