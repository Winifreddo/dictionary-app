import React from "react";
import logo from "./logo.png";
import Dictionary from "./Dictionary";
import './App.css';


export default function App() {
  return (
    <div className="container">
    <div className="logo">
      <header>
       <img src={logo} className="app-header" alt="logo" /> 
      </header>
      <main>
        <Dictionary />
      </main>
      <footer className="text-center">
        <small>
        Coded by Leigh Richards, open-sourced on<a href="https://github.com/Winifreddo/dictionary-app" target="blank"> gitHub</a>  
     </small> 
     </footer>
    </div>
   </div>
  );
}

