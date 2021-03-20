import React from "react";
import "./Dictionary.css";


export default function Dictionary () {
    return (
        <div className="Dictionary">
           <form>
               <input type="search" placeholder="Search for anything..." />
               <input type="submit" value="search" />
           </form>
        </div>
    );
}