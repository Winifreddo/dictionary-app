import React, {useState} from "react";
import "./Dictionary.css";
import axios from "axios";

export default function Dictionary () {
let [result, setResult]=useState(null);

function handleResponse (response) {
    console.log(response.data[0].meanings[0]);
}

function search (event) {

    event.preventDefault();


let url= `https://api.dictionaryapi.dev/api/v2/entries/en_US/${result}`;
axios.get(url).then(handleResponse);
}

function handleResultChange (event) {
      
    setResult(event.target.value);
    
}

    return (
        <div className="Dictionary">
           <form onSubmit={search}>
               <input type="search" autoFocus= "on" placeholder="Search for anything..." onChange={handleResultChange} />
               <input type="submit" value="search" />
           </form>
        </div>
    );
}