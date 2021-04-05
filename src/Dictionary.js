import React, {useState} from "react";
import axios from "axios";
import Results from "./Results";
import Photos from "./Photos";

export default function Dictionary () {
let [word, setWord]=useState("");
let [results, setResults]=useState(null);
let [photos, setPhotos]=useState(null);

function handleResponse (response) {
setResults(response.data[0]);
}

function handlePexelsResponse(response) {
    setPhotos(response.data.photos)
}

function search (event) {
    event.preventDefault();


let url= `https://api.dictionaryapi.dev/api/v2/entries/en_US/${word}`;
axios.get(url).then(handleResponse);

let pexelsApiKey = "563492ad6f9170000100000116e5195b22d746429b54094417d31f45";
let pexelsApiUrl = `https://api.pexels.com/v1/search?query=${word}&per_page=8`;
        axios.get(pexelsApiUrl, { headers: {"Authorization" : `Bearer ${pexelsApiKey}`}}).then(handlePexelsResponse);
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
         <Photos photos={photos} />
        </div>
    );
}