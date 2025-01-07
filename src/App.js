import React from "react";
import "./App.css";
import Nav from "./components/Navbar/Nav";
import Profile from "./components/Profile/Profile";
import Header from "./components/Header/Header";

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
