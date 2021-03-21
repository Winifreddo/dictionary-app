import React, {useState} from "react";
import "./Dictionary.css";
import axios from "axios";
import Results from "./Results";

export default function Dictionary () {
let [word, setWord]=useState("");
let [results, setResults]=useState(null);

function handleResponse (response) {
    console.log(response.data[0]);
setResults(response.data[0]);
}

function search (event) {
    event.preventDefault();


let url= `https://api.dictionaryapi.dev/api/v2/entries/en_US/${word}`;
axios.get(url).then(handleResponse);
}

function handleWordChange (event) {
      
    setWord(event.target.value);
    
}

    return (
        <div className="Dictionary">
           <form onSubmit={search}>
               <input type="search" autoFocus= "on" placeholder="Search for anything..." onChange={handleWordChange} />
               <input type="submit" value="search" />
           </form>
         <Results results={results} />
        </div>
    );
}