import React from "react";
import "./App.css";
import Nav from "./components/Navbar/Nav";
import Profile from "./components/Profile/Profile";
import Header from "./components/Header/Header";
import Dialogs from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Friends from "./components/Friends/Friends";
import Sittings from "./components/Sittings/Sittings";
import News from "./components/News/News";

let App = (props) => {

    return (
        <BrowserRouter>

            <div className="app-wrapper">
                <Header/>
                <Nav/>
                <div className="app-wrapper-content">
                    <Routes>
                        <Route path='/profile' element={<Profile/>}/>
                        <Route path='/dialogs/*' render={ () => <Dialogs/>}/>
                        <Route path='/friends' element={<Friends/>}/>
                        <Route path='/sittings' element={<Sittings/>}/>
                        <Route path='/news' element={<News/>}/>
                    </Routes>
                </div>
            </div>
        </BrowserRouter>
    )
}

export default App;

