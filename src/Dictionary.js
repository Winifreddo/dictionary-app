import React, {useState} from "react";
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
            <div className="row mb-3">

           <form  onSubmit={search}>
               <input type="search" className= "col-4" placeholder="Search for anything..." onChange={handleWordChange} />
           </form>
           
           </div>
         <Results results={results} />
        </div>
    );
}