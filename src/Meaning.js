import React from "react";
import Synonyms from "./Synonyms";
import "./App.css";

export default function Meaning(props){
    return (
        <div className = "Meaning">
            <h3>{props.meaning.partOfSpeach}</h3>
            {props.meaning.definitions.map(function (definition, index)
            {
                return (
                    <div key = {index}>
                        <div className="definition">
                            <strong> Definition:</strong>
                            {definition.definition}
                           
                            <br />
                            <em className="example">{definition.example}</em>
                            
                            <Synonyms synonyms={definition.synonyms} />
                            </div>
                        </div>
                );
            })}
            
    
        </div>      
    );
}