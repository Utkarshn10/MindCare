import "./App.css";
import React, {Component} from "react";
import Main from "./main";
import {HashRouter as Router, Switch, Route} from "react-router-dom";
import Post from "../src/Components/ExplorePages/Blogs/BlogMain";
import SignInSide from "./Components/login/logIn";
import FirstTest from "../src/Components/Assessment/src/index-assessment";
import SelfTrack from "../src/Components/ExplorePages/Self Tracking/welcome";
import TypeOfDisorder from "../src/Components/ExplorePages/Self Tracking/disorderType";
import LevelAnxiety from "../src/Components/ExplorePages/Self Tracking/level";
import Challenge from "../src/Components/ExplorePages/Self Tracking/challenge";
import Reward from "../src/Components/ExplorePages/Self Tracking/reward";
import CheckBack from "../src/Components/ExplorePages/Self Tracking/checkback";
import Objective from "../src/Components/ExplorePages/Self Tracking/objective";
import ShowDown from "../src/Components/ExplorePages/Self Tracking/final";
import Signup from "../src/Components/login/signup1";
import PatientHomePage from "./Components/PatientHomePage/PatientHomePage";
function App() {
  return (
    <div>
      <Router>
        <Route exact path="/" component={Main}></Route>
        <Route exact path="/homepage" component={PatientHomePage}></Route>
        <Route exact path="/signup2" component={Signup}></Route>
        <Route path="/post/:postId" component={Post} />
        <Route exact path="/signup" component={SignInSide}></Route>
        <Route exact path="/assessment" component={FirstTest}></Route>
        <Route exact path="/selfTracking" component={SelfTrack}></Route>
        <Route path="/selectoption" component={TypeOfDisorder}></Route>
        <Route path="/Anxious" component={LevelAnxiety}></Route>
        <Route path="/Challenge" component={Challenge}></Route>
        <Route path="/Reward" component={Reward}></Route>
        <Route path="/CheckBack" component={CheckBack}></Route>
        <Route path="/Letsdoit" component={Objective}></Route>
        <Route path="/Showdown" component={ShowDown}></Route>
      </Router>
    </div>
  );
}

export default App;
