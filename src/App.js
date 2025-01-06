import React from "react";
import "./App.css";
import Header from "./components/Header copy 2";
import Nav from "./components/Nav";
import Profile from "./components/Profile";

let App = () => {
  return (
    <div className="app-wrapper">
      <Header />
      <Nav />
      <Profile />
    </div>
  );
};

export default App;
