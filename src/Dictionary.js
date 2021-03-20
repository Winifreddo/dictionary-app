import React, {useState} from "react";
import "./Dictionary.css";


export default function Dictionary () {
let [result, setResult]=useState(null);
function search (event) {
    event.preventDefault();
    alert("searching");
}

function handleResultChange (event) {
    return (
        setResult (event.target.value)
    )
}

    return (
        <div className="Dictionary">
           <form onSubmit={search}>
               <input type="search" autofocus= "on" placeholder="Search for anything..." onChange={handleResultChange} />
               <input type="submit" value="search" />
           </form>
        </div>
    );
}