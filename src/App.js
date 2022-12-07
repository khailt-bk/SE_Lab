import React from "react";
import './App.css';
import { Navbar } from './components/Navbar/Navbar';
import { BodyDemo } from "./components/Body/body";
import { Password } from "./components/Modal/Password";
import { BrowserRouter as Router, Route, Link, NavLink } from "react-router-dom";

<Router>
    <div className="App">
        <Route path="/" exact component={BodyDemo} />
        <Route path="/login" component={Password} />
    </div>
</Router>


function App() {
  return (
    <><Navbar />
      {/* <Password/> */}
      <BodyDemo /></> 
  );
}

export default App;
