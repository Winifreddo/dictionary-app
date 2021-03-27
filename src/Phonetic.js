import React from "react";
import listen from "./play.png";

export default function Phonetic (props) {

 
    return (
        
        <div className="Phonetic">
            <a href={props.phonetic.audio} target="_blank">
            <img src={listen} className="Listen" alt="Listen" /> 
            </a>
            
            <br />
            <div className="AllPhonetic">
            {props.phonetic.text}
        </div>
        </div>
    );
}