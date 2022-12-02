import './App.css';
import React,{createContext,useState} from "react";
import NavigationBar from './components/NavigationBar/NavigationBar';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";


import Home from "./components/Home/Home";
import Journey from "./components/Journey/Journey";
import Contact from "./components/Contact/Contact";
import Store from "./components/Store/Store";
import Team from "./components/Team/Team";

function App() {
  return (
    <div className="App">   
      <Router>
      <NavigationBar/>
      <Routes>
        <Route path="/" element={<Home/>}>
        </Route>
        <Route path="/journey" element={<Journey/>}>
        </Route>
        <Route path="/contact" element={<Contact/>}>
        </Route>
        <Route path="/store/*" element={<Store/>}>
        </Route>
        <Route path="/team" element={<Team/>}>
        </Route>
      </Routes>
      </Router>
    </div>
  );
}

export default App;
