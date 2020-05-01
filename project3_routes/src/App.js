import React, { useState, useEffect } from "react";
import "./App.css";
import { BrowserRouter, Link, NavLink, Route,Redirect } from "react-router-dom";

import HomePage from "./pages/home";
import AboutPage from "./pages/about";

function App() {

  const [login,setLogin]=useState(false);

  function clickHandle(){
    setLogin(!login);
  }

  return (
    <BrowserRouter>
      <div className="App">
        <header className="App-header">
          <h1>List of Routes Using React Js</h1>
          <ul className="ul-style">
            <li className="li-style">
              <NavLink
                to="/"
                exact
                className="Link-Style"
                activeClassName="link-active-style"
              >
                Home
              </NavLink>
            </li>
            <li className="li-style">
              <NavLink
                to="/about"
                exact
                className="Link-Style"
                activeClassName="link-active-style"
              >
                About Us
              </NavLink>
            </li>
            <li className="li-style">
              <NavLink
                to="/user/ganesh/suthar"
                exact
                className="Link-Style"
                activeClassName="link-active-style"
              >User Ganesh</NavLink>
            </li>
            <li className="li-style">
              <button className="Link-Style" className="remove-button" onClick={clickHandle}>{login ? "Logout" : "Login"}</button>
            </li>
          </ul>

          <Route path="/" exact component={HomePage}></Route>

          <Route path="/about" exact component={AboutPage}></Route>

          <Route
            path="/user/:fName/:lName"
            exact
            render={({ match })=>{
              return login ? (`Welcome ${match.params.fName} ${match.params.lName}`) : <Redirect to='/' />
            }}
          ></Route>

          <Route
            path="/login"
            exact
            render={() => {
              
            }}
          ></Route>
        </header>
      </div>
    </BrowserRouter>
  );
}

export default App;
