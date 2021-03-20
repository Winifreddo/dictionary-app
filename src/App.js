import React from "react";
import logo from "./logo.png";
import './App.css';


export default function App() {
  return (
    <div className="container">
    <div className="logo">
      <header>
       <img src={logo} className="app-header" alt="logo" /> 
      </header>
      <footer>
        Coded by Leigh Richards, open-sourced on<a href="https://github.com/Winifreddo/dictionary-app">gitHub</a>  
      </footer>
    </div>
   </div>
  );
}

