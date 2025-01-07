import React from "react";
import "./App.css";
import Nav from "./components/Nav";
import Profile from "./components/Profile";
import Header from "./components/Header";

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
